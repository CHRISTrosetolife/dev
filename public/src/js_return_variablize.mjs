import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
import {js_node_type} from "./js_node_type.mjs";
import {list_adder_unique} from "./list_adder_unique.mjs";
import {returns} from "./returns.mjs";
import {js_node_types} from "./js_node_types.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_adder} from "./list_adder.mjs";
import { list_index } from "./list_index.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { string_combine } from "./string_combine.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_parse_first } from "./js_parse_first.mjs";
export function js_return_variablize(ast) {
    let return_statements = js_node_type_visitor(ast, 'ReturnStatement');
    for (let r of return_statements) {
        let {parent,node} = r;
        assert(list_is, [parent]);
        let index = list_index(parent, node);
        let identifiers = js_identifiers(ast);
        let i = 1;
        let variable_name;
        while (true) {
            variable_name = string_combine('v', i);
            if (!list_includes(identifiers, variable_name)) {
                break;
            }
        }
        const code = `let ${variable_name} = 0;`;
        let parsed = js_parse_first(code)
        if (0)
        parent.splice(index, 0, variable_name);
        console.log({
            r,
            parsed
        });
    }
}
