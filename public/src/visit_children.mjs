import { list_concat } from "./list_concat.mjs";
import { each } from "./each.mjs";
export function visit_children(children_get, root, filter, each, stack) {
  let children = children_get(root);
  for (let node of children) {
    if (filter(node)) {
      each({
        node,
        parent: root,
        stack,
      });
      let stacked = list_concat(stack, [node]);
      visit_children(node, children_get, filter, each, stacked);
    }
  }
}
