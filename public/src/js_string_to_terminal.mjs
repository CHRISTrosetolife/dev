import { string_double } from "./string_double.mjs";
import { terminal_tokens_quote } from "./terminal_tokens_quote.mjs";
import { string_replace } from "./string_replace.mjs";
export function js_string_to_terminal(input) {
  let q = terminal_tokens_quote();
  let replaced = string_replace(input, q, string_double(q));
  let v = string_delimit_single(replaced);
  return v;
}
