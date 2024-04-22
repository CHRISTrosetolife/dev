import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
import {object_new} from "./object_new.mjs";
import {list_insert} from "./list_insert.mjs";
import {list_get_end} from "./list_get_end.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_call} from "./js_call.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {string_delimit} from "./string_delimit.mjs";
import {each_reverse} from "./each_reverse.mjs";
import {error} from "./error.mjs";
import {js_init_index_insert} from "./js_init_index_insert.mjs";
import {js_variable_declarators} from "./js_variable_declarators.mjs";
export function js_object_pattern_functionize(ast) {
    let vs = js_node_type_visitor(ast, 'ObjectPattern');
    console.log({
        vs
    });
    for (let v of vs) {
        let index_insert = js_init_index_insert(v);
        let {node} = v;
        console.log({
            node
        });
        error();
        let {id} = node;
        let {init} = node;
        let {properties} = init;
        each_reverse(properties, p => {
            let {key, value} = p;
            let {name: key_name} = key;
            let code_key_string = string_delimit(key_name);
            let key_string = js_parse_expression(code_key_string);
            let call = js_call(object_property_set.name, [id, key_string, value]);
            let {stack} = v;
            let variable_declaration_parent = list_get_end(stack, 2);
            list_insert(variable_declaration_parent, index_insert, call);
        });
        const init_new = js_call(object_new.name, []);
        object_property_set(node, 'init', init_new);
    }
}
