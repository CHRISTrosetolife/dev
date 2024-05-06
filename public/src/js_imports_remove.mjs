import {list_get_end} from "./list_get_end.mjs";
import {list_single} from "./list_single.mjs";
import {list_length_1} from "./list_length_1.mjs";
import {js_imports_existing_named} from "./js_imports_existing_named.mjs";
import {list_difference} from "./list_difference.mjs";
import {js_identifiers} from "./js_identifiers.mjs";
import {js_export_single} from "./js_export_single.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
import {noop} from "./noop.mjs";
import {assert} from "./assert.mjs";
import {list_length} from "./list_length.mjs";
import {list_remove} from "./list_remove.mjs";
export function js_imports_remove(ast) {
    let existing = js_imports_existing(ast);
    let export_ = js_export_single(ast);
    let used = js_identifiers(export_);
    let extra = list_difference(existing, used);
    let {body} = ast;
    for (let e of extra) {
        let existing2 = js_imports_existing_named(ast, e);
        let e2 = list_single(existing2);
        let {stack} = e2;
        let ancestor = list_get_end(stack, 2);
        console.log(ancestor);
        list_remove(body, e2);
    }
}
