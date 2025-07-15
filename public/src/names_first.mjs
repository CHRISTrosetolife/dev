import { list_add } from "./list_add.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { names_female } from "./names_female.mjs";
import { names_male } from "./names_male.mjs";
export function names_first() {
  let m = names_male();
  let f = names_female();
  let na = list_concat_multiple([m, f]);
  list_add(na, "saloni");
  return na;
}
