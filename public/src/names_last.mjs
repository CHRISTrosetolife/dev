import { list_add } from "./list_add.mjs";
import { names_last_list } from "./names_last_list.mjs";
export function names_last() {
  let nl = names_last_list();
  list_add(nl, "ejaz");
  return nl;
}
