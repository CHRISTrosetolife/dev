import { each } from "./each.mjs";
import { summation } from "./summation.mjs";
export function list_sum(list) {
  return summation((s) => each(list, s));
}
