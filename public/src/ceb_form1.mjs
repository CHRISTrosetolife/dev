import { tautology } from "./tautology.mjs";
import { visit } from "./visit.mjs";
import { list_single } from "./list_single.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { noop } from "./noop.mjs";
export function ceb_form1(root) {
  visit(root, (n) => object_property_get(n, "children"), tautology, noop, []);
  let q = root("form[name=form1]");
  let q_single = list_single(q);
  let { childNodes: q_children } = q_single;
  return q_children;
}
