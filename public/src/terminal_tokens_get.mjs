import { terminal_tokens_quote } from "./terminal_tokens_quote.mjs";
import { tokens_simple } from "./tokens_simple.mjs";
export function terminal_tokens_get(input) {
  let split_string = " ";
  let quote_string = terminal_tokens_quote();
  let result = tokens_simple(input, quote_string, split_string);
  return result;
}
