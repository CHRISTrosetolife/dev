import {js_name_unique_v} from "./js_name_unique_v.mjs";
import {js_name_unique} from "./js_name_unique.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
import {js_node_type} from "./js_node_type.mjs";
import {list_adder_unique} from "./list_adder_unique.mjs";
import {returns} from "./returns.mjs";
import {js_node_types} from "./js_node_types.mjs";
import {js_visit_node} from "./js_visit_node.mjs";
import {list_adder} from "./list_adder.mjs";
import {list_index} from "./list_index.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
import {js_parse} from "./js_parse.mjs";
import {js_identifiers} from "./js_identifiers.mjs";
import {string_combine} from "./string_combine.mjs";
import {list_includes} from "./list_includes.mjs";
import {js_parse_first} from "./js_parse_first.mjs";
import {error} from "./error.mjs";
import {js_unparse} from "./js_unparse.mjs";
import {list_first} from "./list_first.mjs";
export function js_return_variablize(ast) {
    let return_statements = js_node_type_visitor(ast, 'ReturnStatement');
    for (let r of return_statements) {
        let {node} = r;
        if (node.argument.type === 'Identifier') {
            continue;
        }
        let {parent} = r;
        assert(list_is, [parent]);
        let index = list_index(parent, node);
        let variable_name = js_name_unique_v(ast);
        const code = js_code_statement(`let ${variable_name} = 0`);
        let parsed = js_parse_first(code);
        parent.splice(index, 0, parsed);
        let {declarations} = parsed;
        let first = list_first(declarations);
        const init = node.argument;
        first.init = init;
        let parsed2 = js_parse_expression(variable_name);
        node.argument = parsed2;
    }
}
