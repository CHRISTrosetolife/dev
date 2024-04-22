import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
import {js_node_type_visitor} from "./js_node_type_visitor.mjs";
export function js_empty_statements_remove(ast) {
    let vs = js_node_type_visitor(ast, 'EmptyStatement');
    for (let v of vs) {
        let {parent} = v;
        assert(list_is, [parent]);
        console.log({
            parent
        });
    }
}
