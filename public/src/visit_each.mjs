import { list_concat } from "./list_concat.mjs";
import { each } from "./each.mjs";
export function visit_each(each, node, parent, stack) {
  each({
    node,
    parent,
    stack,
  });
  let stacked = list_concat(stack, [node]);
  return stacked;
}
