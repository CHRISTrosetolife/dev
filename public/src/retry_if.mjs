import { string_to } from "./string_to.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_map } from "./list_map.mjs";
import { identity } from "./identity.mjs";
export function retry_if(list) {
  return function retry_if_inner(e) {
    let s = string_to(e);
    let m = list_map(list, (i) => string_includes(s, i));
    return list_any_true(m, identity);
  };
}
