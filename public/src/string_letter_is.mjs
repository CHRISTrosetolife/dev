import { string_letters_is } from "./string_letters_is.mjs";
export function string_letter_is(str) {
  return str.length === 1 && string_letters_is(str);
}
