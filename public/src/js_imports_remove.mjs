import {js_export_single} from "./js_export_single.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
export function js_imports_remove(ast) {
    let existing = js_imports_existing(ast);
    let e = js_export_single(ast);
    let used = js_identifiers(ast);
    return used;
}
