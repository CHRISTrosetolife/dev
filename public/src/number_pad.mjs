import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function number_pad(input, padding_count) {
  assert_arguments_length(arguments, 2);
  return input.toString().padStart(padding_count, "0");
}
