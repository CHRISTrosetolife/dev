import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
export function integer_parse(verse_number) {
  let result = parseInt(verse_number, 10);
  assert(number_is, result);
  return result;
}
