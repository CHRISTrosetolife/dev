import { list_includes_not } from "./list_includes_not.mjs";
export function html_condition_includes_not(list, message) {
  return {
    message: (value) => message,
    condition: (value) => list_includes_not(list, value),
  };
}
