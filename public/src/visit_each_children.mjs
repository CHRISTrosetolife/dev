import { list_concat } from "./list_concat.mjs";
import { visit_children } from "./visit_children.mjs";
import { each } from "./each.mjs";
export function visit_each_children(
  parent,
  children_get,
  filter,
  each,
  stack,
  node,
) {
  if (false) {
    each({
      node,
      parent,
      stack,
    });
  }
  let stacked = list_concat(stack, [node]);
  visit_children(node, children_get, filter, each, stacked);
}
