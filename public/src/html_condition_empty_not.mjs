import { string_empty_not_is } from "./string_empty_not_is.mjs";
export function html_condition_empty_not() {
  return {
    message: (value) => "not be empty",
    condition: string_empty_not_is,
  };
}
