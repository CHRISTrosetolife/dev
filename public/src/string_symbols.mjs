import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
export function string_symbols(text) {
  let list = [text];
  return string_symbols_multiple(list);
}
