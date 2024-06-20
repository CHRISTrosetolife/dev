import { identity } from "./identity.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
export function keyboard_keys_sorted() {
  let letters = keyboard_keys();
  list_sort_string(letters, identity);
  return letters;
}
