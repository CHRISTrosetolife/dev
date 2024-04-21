import {js_name_unique} from "./js_name_unique.mjs";
import {string_combine} from "./string_combine.mjs";
import {js_declaration_single_name} from "./js_declaration_single_name.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
export function js_function_name_add(ast) {
    let name = js_declaration_single_name(ast);
    let prefix = string_combine(name, '_');
    js_name_unique(ast, prefix);
    js_visit_node(ast, 'FunctionExpression', v => {
        let {node} = v;
    });
}
