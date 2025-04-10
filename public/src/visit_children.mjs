import { visit_each_children } from "./visit_each_children.mjs";
export function visit_children(
  parent,
  children_get,
  filter,
  lambda_each,
  stack,
) {
  let children = children_get(parent);
  for (let node of children) {
    if (filter(node)) {
      let result = visit_each_children(
        parent,
        children_get,
        filter,
        lambda_each,
        stack,
        node,
      );
      if (result === true) {
        let v = true;
        return v;
      }
    }
  }
}
