import { visit_each_children } from "./visit_each_children.mjs";
import { each } from "./each.mjs";
export function visit(root, children_get, filter, each, stack) {
  visit_each_children(children_get, null, filter, each, stack, root);
}
