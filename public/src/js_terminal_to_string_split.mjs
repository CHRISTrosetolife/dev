import { js_terminal_to_string } from "./js_terminal_to_string.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_double } from "./string_double.mjs";
import { terminal_tokens_quote } from "./terminal_tokens_quote.mjs";
import { string_replace } from "./string_replace.mjs";
export async function js_terminal_to_string_split() {
  let value = await js_terminal_to_string();
  let q = terminal_tokens_quote();
  let replaced = string_replace(value, q, string_double(q));
  let v = string_delimit(replaced);
  return v;
}
