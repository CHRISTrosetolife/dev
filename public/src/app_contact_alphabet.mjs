import { bible_reference_separator } from "./bible_reference_separator.mjs";
import { list_add } from "./list_add.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { digits_10 } from "./digits_10.mjs";
export function app_contact_alphabet() {
  let letters = keyboard_keys();
  list_add_multiple(letters, string_split_empty("' "));
  list_add_multiple(letters, digits_10());
  list_add(letters, bible_reference_separator());
  return letters;
}
