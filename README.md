# Zen Task – Hiring Exercise Starter

A task timer application built with Next.js 14, TypeScript, and Zustand for evaluating junior full-stack developers.

## Purpose

This project serves as a live-coding interview exercise that allows candidates to:
- Read and extend existing code
- Debug intentional issues
- Work with React state management
- Implement API endpoints
- Practice accessibility and git hygiene

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Zustand** for state management
- **CSS Modules** for styling
- **pnpm** for package management
- **ESLint + Prettier** for code quality
- **Edge Runtime** for API routes

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Project Structure

```
zen-task/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main task list page
│   ├── globals.css         # Global styles
│   └── api/time/route.ts   # API endpoint (returns 501)
├── components/
│   ├── TaskRow.tsx         # Individual task component
│   ├── TaskRow.module.css  # Task row styles
│   └── Timer.tsx           # Timer component (has intentional bug)
├── lib/
│   └── useTaskStore.ts     # Zustand store
└── package.json
```

## Features

- Three pre-configured tasks with different time allocations
- Start/stop timer functionality
- Visual feedback for running timers
- Responsive design
- Accessibility features (ARIA labels, focus management)

## Known Issues (Intentional)

The `Timer.tsx` component has a deliberate memory leak where `setInterval` is not properly cleaned up. This is intended for candidates to discover and fix during the interview.

## Interview Focus Areas

- React hooks and state management
- TypeScript usage
- CSS styling and responsive design
- API implementation
- Debugging skills
- Code organization and best practices 