/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        excalifont: ["Excalifont"],
        sans: ['Lexend Deca', 'sans-serif']
      },
      colors: {
        // Brand colors (keeping original summor.se branding)
        brand: {
          primary: '#A3E636',    // main green
          secondary: '#88cc19',  // darker green
          accent: '#fff4e0',     // warm beige (header)
        },
        
        // Monochrome base with shadcn-inspired palette
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(240 10% 3.9%)',
        
        // Card colors
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(240 10% 3.9%)',
        
        // Popover colors
        popover: 'hsl(0 0% 100%)',
        'popover-foreground': 'hsl(240 10% 3.9%)',
        
        // Primary - soft green hacker aesthetic
        primary: 'hsl(142 76% 36%)',      // #16a34a - soft green
        'primary-foreground': 'hsl(355.7 100% 97.3%)',
        
        // Secondary - muted grays
        secondary: 'hsl(240 4.8% 95.9%)',
        'secondary-foreground': 'hsl(240 5.9% 10%)',
        
        // Muted colors
        muted: 'hsl(240 4.8% 95.9%)',
        'muted-foreground': 'hsl(240 3.8% 46.1%)',
        
        // Accent - brighter green for highlights
        accent: 'hsl(142 69% 58%)',       // #4ade80 - brighter green
        'accent-foreground': 'hsl(240 5.9% 10%)',
        
        // Destructive
        destructive: 'hsl(0 84.2% 60.2%)',
        'destructive-foreground': 'hsl(0 0% 98%)',
        
        // Border and input
        border: 'hsl(240 5.9% 90%)',
        input: 'hsl(240 5.9% 90%)',
        ring: 'hsl(142 76% 36%)',         // green focus ring
        
        // Dark mode colors
        dark: {
          background: 'hsl(240 10% 3.9%)',
          foreground: 'hsl(0 0% 98%)',
          card: 'hsl(240 10% 3.9%)',
          'card-foreground': 'hsl(0 0% 98%)',
          popover: 'hsl(240 10% 3.9%)',
          'popover-foreground': 'hsl(0 0% 98%)',
          primary: 'hsl(142 69% 58%)',     // brighter green in dark mode
          'primary-foreground': 'hsl(240 10% 3.9%)',
          secondary: 'hsl(240 3.7% 15.9%)',
          'secondary-foreground': 'hsl(0 0% 98%)',
          muted: 'hsl(240 3.7% 15.9%)',
          'muted-foreground': 'hsl(240 5% 64.9%)',
          accent: 'hsl(142 76% 36%)',      // darker green accent in dark
          'accent-foreground': 'hsl(0 0% 98%)',
          destructive: 'hsl(0 62.8% 30.6%)',
          'destructive-foreground': 'hsl(0 0% 98%)',
          border: 'hsl(240 3.7% 15.9%)',
          input: 'hsl(240 3.7% 15.9%)',
          ring: 'hsl(142 69% 58%)',
        },

        // Legacy UI colors for compatibility
        ui: {
          light: {
            bg: 'hsl(0 0% 100%)',
            text: 'hsl(240 10% 3.9%)',
            border: 'hsl(240 5.9% 90%)',
            surface: 'hsl(0 0% 100%)',
            hover: 'hsl(240 4.8% 95.9%)',
          },
          dark: {
            bg: 'hsl(240 10% 3.9%)',
            text: 'hsl(0 0% 98%)',
            border: 'hsl(240 3.7% 15.9%)',
            surface: 'hsl(240 10% 3.9%)',
            hover: 'hsl(240 3.7% 15.9%)',
          }
        },

        // AI-specific colors - green hacker theme
        ai: {
          primary: 'hsl(142 76% 36%)',     // #16a34a
          secondary: 'hsl(142 69% 58%)',   // #4ade80
          accent: 'hsl(142 91% 85%)',      // very light green
          gradient: {
            from: 'hsl(142 76% 36%)',
            to: 'hsl(142 69% 58%)',
            dark: {
              from: 'hsl(142 76% 36%)',
              to: 'hsl(142 69% 58%)'
            }
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        base: '8px'
      },
      boxShadow: {
        light: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        dark: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      typography: {
        DEFAULT: {
          css: {
            '.callout': {
              '@apply my-4 p-4 rounded-lg border-l-4': {},
            },
            '.callout-title': {
              '@apply flex items-center gap-2 font-semibold mb-2': {},
            },
            '.callout-title-inner': {
              '@apply capitalize': {},
              '&::before, &::after': {
                content: 'none',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
