import { list_single } from "./list_single.mjs";
import { match_string } from "./match_string.mjs";
import { string_is } from "./string_is.mjs";
export function match_functionize(item, a) {
  if (string_is(item)) {
    item = match_string(item);
  }
  let c = item(a);
  let result = list_single(c);
  return result;
}
