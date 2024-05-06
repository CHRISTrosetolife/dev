import {js_name_unique_v_parsed} from "./js_name_unique_v_parsed.mjs";
import {js_parse_expression} from "./js_parse_expression.mjs";
import {list_first} from "./list_first.mjs";
import {list_index} from "./list_index.mjs";
import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
export function js_variablize(ast, parent, node, init) {
    assert(list_is, [parent]);
    let index = list_index(parent, node);
    let {parsed, variable_name} = js_name_unique_v_parsed(ast);
    parent.splice(index, 0, parsed);
    let {declarations} = parsed;
    let first = list_first(declarations);
    first.init = init;
    let parsed2 = js_parse_expression(variable_name);
    return parsed2;
}
