import { string_split_empty } from "./string_split_empty.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
export function app_contact_alphabet() {
  let letters = keyboard_keys();
  list_add_multiple(letters, string_split_empty("' "));
  return letters;
}
