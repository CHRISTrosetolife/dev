import { object_property_get } from "./object_property_get.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_double } from "./string_double.mjs";
import { terminal_tokens_quote } from "./terminal_tokens_quote.mjs";
import { string_replace } from "./string_replace.mjs";
export function js_string_to_terminal(code) {
  let parsed = js_parse_expression(code);
  let value = object_property_get(parsed, "value");
  let q = terminal_tokens_quote();
  let replaced = string_replace(code, q, string_double(q));
  let v = string_delimit(replaced);
  return v;
}
