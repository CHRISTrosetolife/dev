import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { or } from "./or.mjs";
export function list_first_or(unlearning, or) {
  let u;
  if (list_empty_is(unlearning)) {
    u = or;
  } else {
    u = list_first(unlearning);
  }
  return u;
}
