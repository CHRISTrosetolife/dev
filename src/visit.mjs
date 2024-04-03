export function visit(root, children_get, filter, each) {
  let children = children_get(root);
  for (let node of children) {
    if (filter(node)) {
      each({
        node
      });
    }
    visit(node, children_get, filter, each);
  }
}
