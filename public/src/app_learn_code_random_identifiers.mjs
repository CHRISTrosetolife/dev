import { list_shuffle } from "./list_shuffle.mjs";
import { keyboard_keys } from "./keyboard_keys.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_take } from "./list_take.mjs";
export function app_learn_code_random_identifiers(count) {
  let ks = keyboard_keys();
  ("the letter l looks like an i and a 1 so removing to to avoid visual ambiguity");
  list_remove(ks, "l");
  list_shuffle(ks);
  return list_take(ks, count);
}
