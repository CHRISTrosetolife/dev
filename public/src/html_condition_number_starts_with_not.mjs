import { string_empty_not_is } from "./string_empty_not_is.mjs";
export function html_condition_number_starts_with_not() {
  let v = {
    message: function (value) {
      let v2 = "not be empty";
      return v2;
    },
    condition: string_empty_not_is,
  };
  return v;
}
