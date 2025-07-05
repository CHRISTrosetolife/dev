import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
import { match_string } from "./match_string.mjs";
import { string_is } from "./string_is.mjs";
export function match_functionize(a, item) {
  if (string_is(item)) {
    item = match_string(item);
  }
  let c = item(a);
  log({
    item,
    c,
  });
  let result = list_single(c);
  return result;
}
