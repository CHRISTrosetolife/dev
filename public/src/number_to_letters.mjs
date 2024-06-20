import { list_join_empty } from "./list_join_empty.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { list_get } from "./list_get.mjs";
import { string_to } from "./string_to.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { keyboard_keys_sorted } from "./keyboard_keys_sorted.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_index } from "./list_index.mjs";
import { integer_parse } from "./integer_parse.mjs";
export function number_to_letters(input) {
  let alphabet = keyboard_keys_sorted();
  input = integer_parse(input);
  let b26 = input.toString(26);
  let r10 = list_map(range(10), string_to);
  let input_alphabet = list_concat(r10, alphabet);
  let result = list_map(string_split_empty(b26), (i) => {
    let index = list_index(input_alphabet, i);
    return list_get(alphabet, index);
  });
  return list_join_empty(result);
}
