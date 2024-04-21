import {each_reverse} from "./each_reverse.mjs";
import {js_init_index_insert} from "./js_init_index_insert.mjs";
import {js_variable_declarators} from "./js_variable_declarators.mjs";
import {list_reverse} from "./list_reverse.mjs";
import {list_copy} from "./list_copy.mjs";
import {add_1} from "./add_1.mjs";
import {list_insert} from "./list_insert.mjs";
import {list_index} from "./list_index.mjs";
import {error} from "./error.mjs";
import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {string_delimit} from "./string_delimit.mjs";
import {list_get_end} from "./list_get_end.mjs";
import {js_unparse} from "./js_unparse.mjs";
import {js_parse_first} from "./js_parse_first.mjs";
import {js_parse} from "./js_parse.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_code_call} from "./js_code_call.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
import {list_adder_unique} from "./list_adder_unique.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_add} from "./list_add.mjs";
export function js_array_init_functionize(ast) {
    let vs = js_variable_declarators(ast, 'ArrayExpression');
    for (let v of vs) {
        let index_insert = js_init_index_insert(v);
        let {node} = v;
        let {id} = node;
        let {init} = node;
        let {elements} = init;
        console.log({elements})
        each_reverse(elements, e => {
            console.log({e})
            return;
            let {key, value} = p;
            let {name: key_name} = key;
            let code_key_string = string_delimit(key_name);
            let key_string = js_parse_expression(code_key_string);
            let code_call = js_code_statement(js_code_call(object_property_set.name));
            let call = js_parse_first(code_call);
            let {expression} = call;
            let {arguments: args} = expression;
            list_add(args, id);
            list_add(args, key_string);
            list_add(args, value);
            let {stack} = v;
            let variable_declaration_parent = list_get_end(stack, 2);
            list_insert(variable_declaration_parent, index_insert, call);
        });
        let init_new = js_parse_expression('{}');
        object_property_set(node, 'init', init_new);
    }
}
