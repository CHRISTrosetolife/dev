import { string_includes } from "./string_includes.mjs";
export function string_includes_curry(function_name) {
  return (term) => string_includes(function_name, term);
}
