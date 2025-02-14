import { visit_children } from "./visit_children.mjs";
import { each } from "./each.mjs";
export function visit(root, children_get, filter, each, stack) {
  visit_children(root, children_get, filter, each, stack);
}
