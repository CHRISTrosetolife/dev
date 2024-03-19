import { string_length } from "./string_length.mjs";

export function string_get_reverse(input, index) {
    let length = string_length(input);
  return input[length - 1 - index];
}
