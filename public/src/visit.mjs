import { visit_each_children } from "./visit_each_children.mjs";
export function visit(root, children_get, filter, lambda_each, stack) {
  visit_each_children(null, children_get, filter, lambda_each, stack, root);
}
