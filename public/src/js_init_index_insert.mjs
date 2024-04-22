import {add_1} from "./add_1.mjs";
import {list_index} from "./list_index.mjs";
import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
import {list_get_end} from "./list_get_end.mjs";
export function js_init_index_insert(v, offset) {
    let {stack} = v;
    let variable_declaration = list_get_end(stack, offset);
    let variable_declaration_parent = list_get_end(stack, add_1(offset));
    assert(list_is, [variable_declaration_parent]);
    let index = list_index(variable_declaration_parent, variable_declaration);
    let index_insert = add_1(index);
    return index_insert;
}
