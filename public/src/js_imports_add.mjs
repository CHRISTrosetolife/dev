import {js_identifiers} from "./js_identifiers.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
import {list_intersect} from "./list_intersect.mjs";
import {function_names} from "./function_names.mjs";
import {list_difference} from "./list_difference.mjs";
import {js_export_single} from "./js_export_single.mjs";
import {js_code_import} from "./js_code_import.mjs";
export async function js_imports_add(ast) {
    let e = js_export_single(ast);
    let {declaration} = e;
    let {id} = declaration;
    let {name} = id;
    let existing = js_imports_existing(ast);
    let names = await function_names();
    let identifiers = js_identifiers(ast);
    let identifier_fns = list_intersect(identifiers, names);
    let missing = list_difference(identifier_fns, existing);
    let self = [name];
    let missing_without_self = list_difference(missing, self);
    for (let m of missing_without_self) {}
    console.log({
        c: js_code_import('test')
    });
}
