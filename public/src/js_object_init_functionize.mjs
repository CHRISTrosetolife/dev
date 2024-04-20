import {js_unparse} from "./js_unparse.mjs";
import {js_parse_first} from "./js_parse_first.mjs";
import {js_parse} from "./js_parse.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {js_code_call} from "./js_code_call.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
import {list_adder_unique} from "./list_adder_unique.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_add} from "./list_add.mjs";
export function js_object_init_functionize(ast) {
    let vs = list_adder_unique(la => {
        js_visit_node(ast, 'VariableDeclarator', v => {
            let {node} = v;
            let {init} = node;
            if (init.type === 'ObjectExpression') {
                la(v);
            }
        });
    });
    for (let v of vs) {
        let {stack} = v;
        let {node} = v;
        let {parent} = v;
        let {id} = parent;
        let {init} = node;
        console.log({init});
        let {properties} = init;
        for (let p of properties) {
            let {key, value} = p;
            let code = js_code_statement(js_code_call(object_property_set.name));
            let call = js_parse_first(code);
            let {expression} = call;
            let {arguments: args} = expression;
            list_add(args, id);
            list_add(args, key);
            list_add(args, value);
           // console.log({stack,parent});
        }
    }
}
