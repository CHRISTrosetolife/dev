import { list_includes_not } from "./list_includes_not.mjs";
export function html_condition_includes_not(message, existing) {
  return {
    message: (value) => message,
    condition: (value) => list_includes_not(existing, value),
  };
}
