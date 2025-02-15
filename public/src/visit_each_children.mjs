import { list_concat } from "./list_concat.mjs";
import { visit_children } from "./visit_children.mjs";
export function visit_each_children(
  parent,
  children_get,
  filter,
  lambda_each,
  stack,
  node,
) {
  if (
    lambda_each({
      node,
      parent,
      stack,
    }) === true
  ) {
    let v = true;
    return v;
  }
  let stacked = list_concat(stack, [node]);
  let v2 = visit_children(node, children_get, filter, lambda_each, stacked);
  return v2;
}
