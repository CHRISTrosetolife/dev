import {js_identifier_to_expression} from "./js_identifier_to_expression.mjs";
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
import {js_unparse} from "./js_unparse.mjs";
import {assert} from "./assert.mjs";
import {list_is} from "./list_is.mjs";
import {object_property_get} from "./object_property_get.mjs";
export function js_object_pattern_functionize(ast) {
    let vs = js_node_type_visitor(ast, 'ObjectPattern');
    for (let v of vs) {
        let {stack} = v;
        let {parent} = v;
        let {node} = v;
        let {properties} = node;
        let index_insert = js_init_index_insert(v, 2);
        let {id} = node;
        each_reverse(properties, p => {
            let {key, value} = p;
            console.log({
                key,
                value
            });
            let call = js_call(object_property_get.name, [id, key_string, value]);
            error();
            let key_string = js_identifier_to_expression(key);
            let variable_declaration_parent = list_get_end(stack, 3);
            assert(list_is, [variable_declaration_parent]);
            list_insert(variable_declaration_parent, index_insert, call);
        });
        const init_new = js_call(object_new.name, []);
        object_property_set(parent, 'init', init_new);
    }
}
