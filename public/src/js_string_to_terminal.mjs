import { terminal_tokens_quote } from "./terminal_tokens_quote.mjs";
import { string_replace } from "./string_replace.mjs";
export function js_string_to_terminal(input) {
  let replaced = string_replace(input, terminal_tokens_quote());
  string_delimit_single();
}
