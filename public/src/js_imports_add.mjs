import {js_identifiers} from "./js_identifiers.mjs";
import {js_visit} from "./js_visit.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
import {list_intersect} from "./list_intersect.mjs";
import {function_names} from "./function_names.mjs";
export async function js_imports_add(ast) {
    let existing = js_imports_existing(ast);
    let names = await function_names();
    let identifiers = js_identifiers(ast);
    let identifier_fns = list_intersect(identifiers, names);
    console.log({
        identifiers,
        identifier_fns
    });
    js_visit(ast, v => {
        let {node} = v;
    });
}
