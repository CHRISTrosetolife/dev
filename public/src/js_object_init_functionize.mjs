import {js_identifier_to_expression} from "./js_identifier_to_expression.mjs";
import {js_call} from "./js_call.mjs";
import {each_reverse} from "./each_reverse.mjs";
import {js_init_index_insert} from "./js_init_index_insert.mjs";
import {js_variable_declarators} from "./js_variable_declarators.mjs";
import {list_insert} from "./list_insert.mjs";
import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
import {list_get_end} from "./list_get_end.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {object_new} from "./object_new.mjs";
export function js_object_init_functionize(ast) {
    let vs = js_variable_declarators(ast, 'ObjectExpression');
    for (let v of vs) {
        let index_insert = js_init_index_insert(v, 1);
        let {node} = v;
        let {id} = node;
        let {init} = node;
        let {properties} = init;
        each_reverse(properties, p => {
            let {key, value} = p;
            let key_string = js_identifier_to_expression(key);
            let call = js_call(object_property_set.name, [id, key_string, value]);
            let {stack} = v;
            let variable_declaration_parent = list_get_end(stack, 2);
            assert(list_is, [variable_declaration_parent]);
            list_insert(variable_declaration_parent, index_insert, call);
        });
        const init_new = js_call(object_new.name, []);
        object_property_set(node, 'init', init_new);
    }
}
