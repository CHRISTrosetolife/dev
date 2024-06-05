import { string_includes } from "./string_includes.mjs";
export function string_includes_curry(function_name) {
  return (term) => {
    let result = string_includes(function_name, term);
    return result;
  };
}
