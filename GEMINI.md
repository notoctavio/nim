# Project Context: Nim

This project is a personal portfolio and blog built with a modern web stack, focusing on high-quality UI/UX and animations.

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Content**: [MDX](https://mdxjs.com/) for blog posts and dynamic pages
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode support
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

- `app/`: Contains the main application routes, layouts, and global styles.
  - `blog/`: MDX-based blog posts.
  - `work/`: Dynamic project showcases using `[slug]` routing.
- `components/ui/`: Reusable, atomic UI components, many featuring advanced animations (e.g., `morphing-dialog`, `text-effect`).
- `hooks/`: Custom React hooks (e.g., `useClickOutside`).
- `lib/`: Shared utilities (`utils.ts`) and constant definitions (`constants.ts`).
- `public/`: Static assets like images and SVGs.

## Development Patterns

- **Styling**: Utility-first CSS with Tailwind. Uses `clsx` and `tailwind-merge` (via `lib/utils.ts`) for dynamic class management.
- **Animations**: Prefer `motion` for declarative animations and transitions.
- **Components**: Functional components with TypeScript interfaces for props.
- **Linting & Formatting**: ESLint and Prettier are configured. Prettier includes the Tailwind CSS plugin for automatic class sorting.

## Data Management

- `app/data.ts`: Acts as the "Source of Truth" for the portfolio's content. It defines TypeScript types and exports constants for:
  - `PROJECTS`: Featured work with descriptions and video demo URLs.
  - `WORK_EXPERIENCE`: Detailed career history, including logos, roles, and highlights.
  - `BLOG_POSTS`: Metadata for blog articles (linking to MDX routes).
  - `SOCIAL_LINKS` and `EMAIL`: Contact and social media information.

## Key Files

- `app/data.ts`: Centralized data store for the site's content.
- `next.config.mjs`: Configures Next.js, including MDX support.
- `tailwind.config.mjs` (or PostCSS equivalent): Defines the design system.
