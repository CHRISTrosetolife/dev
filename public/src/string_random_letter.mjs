import { string_case_upper } from "./string_case_upper.mjs";
import { random_50_50 } from "./random_50_50.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
export function string_random_letter() {
  let ks = keyboard_keys();
  let name = list_random_item(ks);
  if (random_50_50()) {
    name = string_case_upper(name);
  }
  return name;
}
