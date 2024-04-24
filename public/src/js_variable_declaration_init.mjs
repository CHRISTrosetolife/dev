import {object_property_set} from "./object_property_set.mjs";
import {list_first} from "./list_first.mjs";
import {equal} from "./equal.mjs";
import {list_length} from "./list_length.mjs";
import {list_is} from "./list_is.mjs";
import {assert} from "./assert.mjs";
export function js_variable_declaration_init(parsed, init) {
    let {declarations} = parsed;
    assert(list_is, [declarations]);
    let length = list_length(declarations);
    assert(equal, [length, 1]);
    let declaration = list_first(declarations);
    object_property_set(declaration, 'init', init);
}
