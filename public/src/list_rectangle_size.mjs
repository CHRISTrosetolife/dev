import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
export function list_rectangle_size(input) {
  let y = list_size(input);
  let first = list_first(input);
  let x = list_size(first);
  let result = {
    y,
    x,
  };
  return result;
}
