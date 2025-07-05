import { log } from "./log.mjs";
import { match_string } from "./match_string.mjs";
import { string_is } from "./string_is.mjs";
export function match_functionize(a, item) {
  log({
    a,
  });
  if (string_is(item)) {
    item = match_string(item);
  }
  let c = item(a);
  return c;
}
