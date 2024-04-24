import {js_variable_declaration_init} from "./js_variable_declaration_init.mjs";
import {js_code_declare_assign} from "./js_code_declare_assign.mjs";
import {json_to} from "./json_to.mjs";
import {equal} from "./equal.mjs";
import {js_name_unique_v_parsed} from "./js_name_unique_v_parsed.mjs";
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
import {js_variablize} from "./js_variablize.mjs";
import {list_length} from "./list_length.mjs";
import {list_first} from "./list_first.mjs";
export function js_object_pattern_functionize(ast) {
    let vs = js_node_type_visitor(ast, 'ObjectPattern');
    for (let v of vs) {
        let {stack} = v;
        let grandparent = list_get_end(stack, 1);
        let variable_declaration_parent = list_get_end(stack, 3);
        let {parent} = v;
        let {node} = v;
        let {properties} = node;
        let index_insert = js_init_index_insert(v, 2);
        let {parsed, variable_name} = js_name_unique_v_parsed(ast);
        each_reverse(properties, p => {
            let {key, value} = p;
            let parsed = js_code_declare_assign(value);
            let key_string = js_identifier_to_expression(key);
            return;
            let call = js_call(object_property_get.name, [variable_name, key_string]);
            js_variable_declaration_init(parsed, call);
            console.log({
                key,
                value
            });
        });
        let {init} = parent;
        js_variable_declaration_init(parsed, init);
        list_insert(variable_declaration_parent, index_insert, parsed);
    }
}
