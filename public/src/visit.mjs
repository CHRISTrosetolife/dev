import {list_concat} from "./list_concat.mjs";
import {list_pop} from "./list_pop.mjs";
import {list_add} from "./list_add.mjs";
export function visit(root, children_get, filter, each, stack) {
    let children = children_get(root);
    for (let node of children) {
        if (filter(node)) {
            each({
                node,
                parent: root,
                stack
            });
            let stacked = list_concat(stack, [node]);
            console.log(stacked.length)
            visit(node, children_get, filter, each, stacked);
        }
    }
}
