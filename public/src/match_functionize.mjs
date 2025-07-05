import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { log } from "./log.mjs";
import { match_string } from "./match_string.mjs";
import { string_is } from "./string_is.mjs";
export function match_functionize(a, item, lambda) {
  assert_arguments_length(arguments, 3);
  log({
    a,
  });
  if (string_is(item)) {
    item = match_string(item);
  }
  let c = item(a);
  return c;
}
