import { list_sort_string_map } from "./list_sort_string_map.mjs";
import { identity } from "./identity.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
export function keyboard_keys_sorted() {
  let letters = keyboard_keys();
  list_sort_string_map(letters, identity);
  return letters;
}
