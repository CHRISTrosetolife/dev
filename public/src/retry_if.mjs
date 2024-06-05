import { string_to } from "./string_to.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_any } from "./list_any.mjs";
import { log } from "./log.mjs";
export function retry_if(list) {
  return function retry_if_inner(e) {
    log({
      e,
    });
    let s = string_to(e);
    return list_any(list, (i) => string_includes(s, i));
  };
}
