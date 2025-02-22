import { js_parse_expression } from "./js_parse_expression.mjs";
export function html_condition_js_expression_valid() {
  let v = {
    message: function (value) {
      let v4 = "be valid a JavaScript expression";
      return v4;
    },
    condition: function (value) {
      try {
        js_parse_expression(value);
      } catch (e) {
        let v5 = false;
        return v5;
      }
      let v6 = true;
      return v6;
    },
  };
  return v;
}
