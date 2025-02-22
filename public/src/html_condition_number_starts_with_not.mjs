import { string_first } from "./string_first.mjs";
import { string_to } from "./string_to.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
export function html_condition_number_starts_with_not() {
  let digits = list_map(range(10), string_to);
  let v = {
    message: function (value) {
      let v2 = "not start with a number";
      return v2;
    },
    condition: function (value) {
      if (string_empty_is(value)) {
        let v3 = false;
        return v3;
      }
      let f = string_first(value);
      let v4 = list_includes(digits, f);
      return v4;
    },
  };
  return v;
}
