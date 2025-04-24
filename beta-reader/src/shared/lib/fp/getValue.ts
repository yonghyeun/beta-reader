export const getValue = <T>(value: T | (() => T)) =>
  typeof value === "function" ? (value as () => T)() : value;
