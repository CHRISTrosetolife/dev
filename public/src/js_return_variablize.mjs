import {js_variablize} from "./js_variablize.mjs";
import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
export function js_return_variablize(ast) {
    let return_statements = js_node_type_visitor(ast, 'ReturnStatement');
    for (let r of return_statements) {
        let {node} = r;
        if (node.argument.type === 'Identifier') {
            continue;
        }
        let {parent} = r;
        const init = node.argument;
        let parsed2 = js_variablize(ast, parent, node, init);
        node.argument = parsed2;
    }
}
