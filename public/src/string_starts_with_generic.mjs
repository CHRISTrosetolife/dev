import { string_size } from "./string_size.mjs";
import { range } from "./range.mjs";
export function string_starts_with_generic(string_get_lambda, input, prefix) {
  let input_length = string_size(input);
  let prefix_length = string_size(prefix);
  if (input_length < prefix_length) {
    return false;
  }
  for (let i of range(prefix_length)) {
    if (string_get_lambda(input, i) !== string_get_lambda(prefix, i)) {
      return false;
    }
  }
  return true;
}
