import { string_includes } from "./string_includes.mjs";
export function string_includes_curry_right(search) {
  return (item) => {
    let result = string_includes(item, search);
    return result;
  };
}
