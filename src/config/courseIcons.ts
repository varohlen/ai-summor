export const courseIcons = {
    'ai-kurs': 'fas fa-robot'
} as const;

export type CourseType = keyof typeof courseIcons;
