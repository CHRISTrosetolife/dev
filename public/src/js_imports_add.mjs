import {todo} from "./todo.mjs";
import {js_identifiers} from "./js_identifiers.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
import {list_intersect} from "./list_intersect.mjs";
import {function_names} from "./function_names.mjs";
import {list_difference} from "./list_difference.mjs";
import {js_export_single} from "./js_export_single.mjs";
import {js_code_import} from "./js_code_import.mjs";
import {js_parse_first} from "./js_parse_first.mjs";
import {list_add_beginning} from "./list_add_beginning.mjs";
export async function js_imports_add(ast) {
    let e = js_export_single(ast);
    let {declaration} = e;
    let {id} = declaration;
    let name = id.name;
    let self = [name];
    let existing = js_imports_existing(ast);
    let names = await function_names();
    let identifiers = js_identifiers(ast);
    let identifier_fns = list_intersect(identifiers, names);
    let missing = list_difference(identifier_fns, existing);
    let missing_without_self = list_difference(missing, self);
    let {body} = ast;
    for (let m of missing_without_self) {
        let code = js_code_import(m);
        let first = js_parse_first(code);
        list_add_beginning(body, first);
    }
}
