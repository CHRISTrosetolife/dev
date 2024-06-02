import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_is } from "./list_is.mjs";
export function visit(root, children_get, filter, each, stack) {
  let children = children_get(root);
  if (!list_is(children))
    log({root,
      children,
    });
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
