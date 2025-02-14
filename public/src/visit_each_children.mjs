import { visit_children } from "./visit_children.mjs";
import { visit_each } from "./visit_each.mjs";
import { each } from "./each.mjs";
export function visit_each_children(
  children_get,
  root,
  filter,
  each,
  stack,
  node,
) {
  let stacked = visit_each(each, node, root, stack);
  visit_children(node, children_get, filter, each, stacked);
}
