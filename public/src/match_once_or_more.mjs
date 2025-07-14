import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { match_optional } from "./match_optional.mjs";
import { match_repeat } from "./match_repeat.mjs";
import { match_sequence } from "./match_sequence.mjs";
export function match_once_or_more(repeat_item, repetitions_max) {
  assert_arguments_length(arguments, 2);
  let v = match_sequence([
    repeat_item,
    match_repeat(repetitions_max - 1, match_optional(repeat_item)),
  ]);
  return v;
}
