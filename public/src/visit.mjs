export function visit(root, children_get, filter, each) {
    let children = children_get(root);
    for (let node of children) {
        if (filter(node)) {
            each({
                node,
                parent: root
            });
            visit(node, children_get, filter, each);
        }
    }
}
