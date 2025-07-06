import { tokens_simple } from "./tokens_simple.mjs";
export function terminal_tokens_get(input) {
  let split_string = " ";
  let quote_string = "'";
  let result = tokens_simple(input, quote_string, split_string);
  return result;
}
