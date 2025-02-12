import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_clear } from "./list_clear.mjs";
import { list_unique } from "./list_unique.mjs";
export function list_uniqueify(word_definitions) {
  let unique2 = list_unique(word_definitions);
  list_clear(word_definitions);
  list_add_multiple(word_definitions, unique2);
}
