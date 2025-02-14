import { visit_each_children } from "./visit_each_children.mjs";
import { each } from "./each.mjs";
export function visit(root, children_get, filter, each, stack) {
  visit_each_children(null, children_get, filter, each, stack, root);
}
