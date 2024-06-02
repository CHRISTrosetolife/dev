import { each } from "./each.mjs";
import { list_concat } from "./list_concat.mjs";
export function visit(root, children_get, filter, each, stack) {
  let children = children_get(root);
  for (let node of children) {
    if (filter(node)) {
      each({
        node,
        parent: root,
        stack,
      });
      let stacked = list_concat(stack, [node]);
      visit(node, children_get, filter, each, stacked);
    }
  }
}
