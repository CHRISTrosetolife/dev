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
  if (
    each({
      node,
      parent,
      stack,
    }) === true
  ) {
    let v = true;
    return v;
  }
  let stacked = list_concat(stack, [node]);
  let v2 = visit_children(node, children_get, filter, each, stacked);
  return v2;
}
