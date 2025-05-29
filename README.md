# Zen Task – Hiring Exercise Starter

A minimal task timer application starter built with Next.js 14, TypeScript, and Zustand for evaluating junior full-stack developers.

## What's Already Implemented

This starter provides a foundation with:
- Three hard-coded tasks (Blog post 25min, Code review 15min, Quick email 5min)
- Basic Start/Stop button functionality
- Zustand store for state management
- Timer component that logs elapsed seconds to console
- Clean, responsive UI foundation
- TypeScript setup with strict mode
- ESLint configuration

## What Candidates Need to Build

Candidates will be asked to implement 5 core features:

1. **Live mm:ss display** - Replace console.log with visible timer (01:05)
2. **Persist elapsed time** - Store/restore timer state from localStorage
3. **Start/Stop All** - Add header button to control all timers
4. **Overdue indicator** - Visual feedback when time exceeds allocation
5. **POST on stop** - Complete the API endpoint and call it when timers stop

Plus an optional bonus: **Dark mode toggle**

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Zustand** for state management
- **CSS Modules** for styling
- **pnpm** for package management
- **ESLint** for code quality
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
│   └── api/time/route.ts   # API endpoint skeleton (returns 501)
├── components/
│   ├── TaskRow.tsx         # Individual task component
│   ├── TaskRow.module.css  # Task row styles
│   └── Timer.tsx           # Timer component (console.log only)
├── lib/
│   └── useTaskStore.ts     # Zustand store
└── package.json
```

## Current Features

- ✅ Three pre-configured tasks with time allocations
- ✅ Start/stop timer functionality per task
- ✅ Zustand store with `toggleTimer` action
- ✅ Timer component logs seconds to console
- ✅ Responsive design foundation
- ✅ Accessibility features (ARIA labels)

## Known Issues (Intentional)

The `Timer.tsx` component has a deliberate memory leak where `setInterval` is not properly cleaned up. This is intended for candidates to discover and fix.

## Interview Focus Areas

- React hooks and lifecycle management
- State management with Zustand
- TypeScript usage and type safety
- API implementation and data validation
- CSS styling and responsive design
- Browser APIs (localStorage)
- Debugging and problem-solving skills 