## 2025-12-29 — Timer pause/resume behavior and ESLint `react-hooks/set-state-in-effect`

- **Decision**: Timer pauses when `running` becomes `false` and resumes from the same value when `running` becomes `true` again. Avoid resetting timer state via `setState` inside a `useEffect` cleanup.
- **Implementation**: Use `useState(0)` to track elapsed seconds. Interval only runs while `running === true`, incrementing seconds every second. When `running` becomes `false`, the interval cleanup stops ticking but does NOT reset state. Timer always displays current `seconds` value (whether running or paused).
- **Why**: Provides pause/resume functionality while complying with `react-hooks/set-state-in-effect` rule. The effect only manages the interval subscription (external system), not derived state resets.


