import { list_skip } from "./list_skip.mjs";
import { list_first } from "./list_first.mjs";
export function list_first_remaining(r) {
  let first = list_first(r);
  let remaining = list_skip(r, 1);
  return {
    first,
    remaining,
  };
}
