# Zen Task – Hiring Exercise Spec v 1.0  
*This file is meant to be fed to an AI code-generator (or copied by a human) so that it can scaffold the exact starter repository for our live-coding interview.*

---

## 1 Project Purpose & Goals
| | |
|---|---|
| **Role we’re hiring** | Junior Full-Stack (Next.js + Node) |
| **Why this project** | Lets candidates read, extend, and debug an existing code-base instead of green-field coding. It exercises React state, TypeScript, async logic, a tiny API, accessibility, and git hygiene. |
| **What we care about** | Clear reasoning, incremental commits, working code, questions asked early, and basic familiarity with modern tooling—not pixel-perfect design. |

---

## 2 Tech Stack (must be in the starter)
* **Next.js 14** (App Router, TypeScript template)  
* **pnpm** for package management  
* **Zustand** for global store  
* **CSS Modules** (no Tailwind to keep bundle small)  
* **ESLint + Prettier** pre-configured  
* **Edge Runtime** for the API route  

---

## 3 Starter Code – Explicit Definition
The AI should create the following **file tree** (ellipses … mean regular Next boilerplate):

zen-task/
├─ app/
│ ├─ layout.tsx … minimal html/lang/meta
│ ├─ page.tsx ← Task list page
│ ├─ api/
│ │ └─ time/
│ │ └─ route.ts ← Returns 501 (to be finished by candidate)
│ └─ globals.css … only *:focus { outline } reset
├─ components/
│ ├─ TaskRow.tsx
│ └─ Timer.tsx
├─ lib/
│ └─ useTaskStore.ts ← Zustand store
├─ .eslintrc.js (eslint:recommended + next/core-web-vitals)
├─ tsconfig.json (strict true)
└─ package.json (scripts: dev, lint, type-check)


### 3.1 What each file contains

| File | Must include |
|------|--------------|
| `app/page.tsx` | Renders `<TaskRow>` for **three hard-coded tasks**: `{ id:1, title:'Blog post', allocatedMinutes:25 }`, `{ id:2, …15 }`, `{ id:3, …5 }`. |
| `components/TaskRow.tsx` | Receives `task` prop; shows title, allocated minutes, a **Start/Stop button** connected to the store, and an inline `<Timer />`. |
| `components/Timer.tsx` | Local `useEffect` with `setInterval`; **currently only `console.log(seconds)`** once per second. |
| `lib/useTaskStore.ts` | Zustand store state:<br>`tasks: Task[]`, `toggleTimer(id)`, plus transient field `runningIds: number[]`. |
| `app/api/time/route.ts` | Edge handler skeleton: `POST` → returns `NextResponse.json({ ok:false, reason:'Not implemented' }, { status:501 })`. |

### 3.2 Deliberate “Trap” Bug
Inside `components/Timer.tsx` the `setInterval` **is NOT cleared** in the cleanup function:

```ts
useEffect(() => {
  if (!running) return;
  const id = setInterval(() => setSec(s => s + 1), 1000);
  // ❌ BUG: missing `return () => clearInterval(id);`
}, [running]);
