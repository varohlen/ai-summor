import type { CollectionEntry } from 'astro:content';

type RegularCollections = 'ai-kurs';

interface FolderEntry<T extends RegularCollections> {
  title: string;
  entries: CollectionEntry<T>[];
  subfolders: Map<string, FolderEntry<T>>;
  order?: number;
  indexFile?: CollectionEntry<T>;
  path: string;
}

interface GroupedContent<T extends RegularCollections> {
  root?: FolderEntry<T>;
  [key: string]: FolderEntry<T> | undefined;
}

function prettifySlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function createFolderEntry<T extends RegularCollections>(
  path: string,
  title: string,
  order?: number,
  indexFile?: CollectionEntry<T>
): FolderEntry<T> {
  return {
    title,
    entries: [],
    subfolders: new Map(),
    order,
    indexFile,
    path
  };
}

export function organizeContent<T extends RegularCollections>(
  collection: CollectionEntry<T>[]
): {
  rootContent: CollectionEntry<T>[];
  folders: [string, FolderEntry<T>][];
} {
  const groups: GroupedContent<T> = {};
  const draftFolders = new Set<string>();

  collection.forEach(entry => {
    const parts = entry.id.split('/');
    const isIndex = parts[parts.length - 1].startsWith('index');
    
    if (isIndex) {
      parts.pop();
      const folderPath = parts.join('/');
      
      if (entry.data.draft) {
        draftFolders.add(folderPath);
        return;
      }
      
      if (!groups[folderPath]) {
        groups[folderPath] = createFolderEntry(
          folderPath,
          entry.data.title || prettifySlug(parts[parts.length - 1]),
          entry.data.order,
          entry
        );
      } else if (groups[folderPath]) {
        groups[folderPath]!.indexFile = entry;
        groups[folderPath]!.title = entry.data.title || groups[folderPath]!.title;
        groups[folderPath]!.order = entry.data.order;
      }
    }
  });

  collection.forEach(entry => {
    if (entry.data.draft) return;
    
    const parts = entry.id.split('/');
    const isIndex = parts[parts.length - 1].startsWith('index');
    
    if (!isIndex) {
      const fileFolderPath = parts.slice(0, -1).join('/');
      if (draftFolders.has(fileFolderPath)) return;
      parts.pop();
      let currentPath = '';
      let parentFolder: FolderEntry<T> | undefined;
      
      for (const part of parts) {
        const newPath = currentPath ? `${currentPath}/${part}` : part;
        
        if (!groups[newPath]) {
          groups[newPath] = createFolderEntry(
            newPath,
            prettifySlug(part)
          );
        }
        
        if (parentFolder && groups[newPath]) {
          parentFolder.subfolders.set(part, groups[newPath]!);
        }
        
        parentFolder = groups[newPath];
        currentPath = newPath;
      }
      
      if (parts.length === 0) {
        if (!groups.root) {
          groups.root = createFolderEntry('', 'Root');
        }
        groups.root.entries.push(entry);
      } else {
        const folderPath = parts.join('/');
        if (!groups[folderPath]) {
          groups[folderPath] = createFolderEntry(
            folderPath,
            prettifySlug(parts[parts.length - 1])
          );
        }
        groups[folderPath]!.entries.push(entry);
      }
    }
  });

  Object.values(groups).forEach(folder => {
    if (!folder) return;
    
    folder.entries.sort((a, b) => {
      const orderA = a.data.order ?? Infinity;
      const orderB = b.data.order ?? Infinity;
      
      if (orderA === orderB) {
        return a.data.title.localeCompare(b.data.title);
      }
      return orderA - orderB;
    });
  });

  const rootContent = (groups.root?.entries || []).filter(entry => !entry.id.includes('/arkiv/'));
  const validFolders = Object.entries(groups)
    .filter(([key, value]) => key !== 'root' && value !== undefined && !key.includes('arkiv'))
    .map(([key, value]) => [key, value!] as [string, FolderEntry<T>])
    .sort(([, a], [, b]) => {
      const orderA = a.order ?? Infinity;
      const orderB = b.order ?? Infinity;
      
      if (orderA === orderB) {
        return a.title.localeCompare(b.title);
      }
      return orderA - orderB;
    });

  return { rootContent, folders: validFolders };
}
