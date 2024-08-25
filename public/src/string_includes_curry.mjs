import { string_includes } from "./string_includes.mjs";
export function string_includes_curry(item) {
  return (search) => {
    let result = string_includes(item, search);
    return result;
  };
}
