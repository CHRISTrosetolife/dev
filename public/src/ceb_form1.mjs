import { visit } from "./visit.mjs";
import { log } from "./log.mjs";
import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
export function ceb_form1(root) {
  log(root);
  visit(root, (n) => object_property_get(n, "children"));
  let q = root("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  return q_children;
}
