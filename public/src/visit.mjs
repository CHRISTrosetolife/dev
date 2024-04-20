import { list_add } from "./list_add.mjs";

export function visit(root, children_get, filter, each, stack) {
    let children = children_get(root);
    for (let node of children) {
        if (filter(node)) {
            each({
                node,
                parent: root,
                stack
            });
            list_add(stack, node)
            visit(node, children_get, filter, each, stack);
            list_pop(stack)
        }
    }
}
