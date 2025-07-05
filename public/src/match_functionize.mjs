import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { match_string } from "./match_string.mjs";
import { string_is } from "./string_is.mjs";
export function match_functionize(a, item, lambda) {
  assert_arguments_length(arguments, 3);
  let v = list_map(a, function (ai) {
    if (string_is(item)) {
      item = match_string(item);
    }
    let c = item(a);
    return c;
  });
  return v;
}
