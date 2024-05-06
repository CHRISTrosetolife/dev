import {js_imports_add_specified} from "./js_imports_add_specified.mjs";
import {function_names} from "./function_names.mjs";
export async function js_imports_add(ast) {
    let names = await function_names();
    js_imports_add_specified(ast, names);
}
