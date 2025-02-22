import { list_includes_not } from "./list_includes_not.mjs";
import { digits_10 } from "./digits_10.mjs";
import { string_first } from "./string_first.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
export function html_condition_number_starts_with_not() {
  let digits = digits_10();
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
      let v4 = list_includes_not(digits, f);
      return v4;
    },
  };
  return v;
}
