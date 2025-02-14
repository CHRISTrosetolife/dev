import { visit_each_children } from "./visit_each_children.mjs";
import { each } from "./each.mjs";
export function visit_children(children_get, parent, filter, each, stack) {
  let children = children_get(parent);
  for (let node of children) {
    if (filter(node)) {
      visit_each_children(children_get, parent, filter, each, stack, node);
    }
  }
}
