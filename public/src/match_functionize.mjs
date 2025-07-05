import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { match_string } from "./match_string.mjs";
import { string_is } from "./string_is.mjs";
export function match_functionize(a, item) {
  assert_arguments_length(arguments, 2);
  let v = list_map(a, function (ai) {
    if (string_is(item)) {
      item = match_string(item);
    }
    let c = item(ai);
    return c;
  });
  let c = list_concat_multiple(v);
  return c;
}
