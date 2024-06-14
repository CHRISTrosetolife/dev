import { integer_parse_try } from "./integer_parse_try.mjs";
import { number_is } from "./number_is.mjs";
import { assert } from "./assert.mjs";
export function integer_parse(verse_number) {
  let result = integer_parse_try(verse_number);
  assert(number_is, [result]);
  return result;
}
