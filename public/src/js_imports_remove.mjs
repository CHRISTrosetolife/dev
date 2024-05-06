import {list_difference} from "./list_difference.mjs";
import {js_identifiers} from "./js_identifiers.mjs";
import {js_export_single} from "./js_export_single.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
import {noop} from "./noop.mjs";
import { assert } from "./assert.mjs";
export function js_imports_remove(ast) {
    let existing = js_imports_existing(ast);
    let export_ = js_export_single(ast);
    let used = js_identifiers(export_);
    let extra = list_difference(existing, used);
    for (let e of extra) {
        let existing2 = js_imports_existing_named(ast, e);
        assert(list_length_1,[existing]);
    }
    return {
        existing,
        extra,
        used
    };
}
