import { assert } from "./assert.mjs";
import { each } from "./each.mjs";
import { list_first } from "./list_first.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_skip } from "./list_skip.mjs";
export function string_split_multiple(input, splits) {
  assert(list_multiple_is, [splits]);
  let temp_character = list_first(splits);
  each(list_skip(splits, 1), function (token) {
    input = input.split(token).join(temp_character);
  });
  input = input.split(temp_character);
  return input;
}
