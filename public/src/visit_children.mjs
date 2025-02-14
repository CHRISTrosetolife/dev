import { visit_each } from "./visit_each.mjs";
import { each } from "./each.mjs";
export function visit_children(children_get, root, filter, each, stack) {
  let children = children_get(root);
  for (let node of children) {
    if (filter(node)) {
      let stacked = visit_each(each, node, root, stack);
      visit_children(node, children_get, filter, each, stacked);
    }
  }
}
