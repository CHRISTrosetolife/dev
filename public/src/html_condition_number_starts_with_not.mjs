import { string_to } from "./string_to.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
export function html_condition_number_starts_with_not() {
  let v = {
    message: function (value) {
      let v2 = "not start with a number";
      return v2;
    },
    condition: function (value) {
      let v3 = list_map(range(10), string_to);
      return v3;
    },
  };
  return v;
}
