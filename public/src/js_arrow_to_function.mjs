import {js_declaration_single_name} from "./js_declaration_single_name.mjs";
import {js_name_unique} from "./js_name_unique.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {js_node_types} from "./js_node_types.mjs";
import { string_combine } from "./string_combine.mjs";
export function js_arrow_to_function(ast) {
    let name = js_declaration_single_name(ast);
    let prefix = string_combine(name, '_')
    js_visit_node(ast, 'ArrowFunctionExpression', v => {
        let {node} = v;
        js_name_unique(ast, prefix);
        object_property_set(node, 'type', 'FunctionExpression');
    });
}
