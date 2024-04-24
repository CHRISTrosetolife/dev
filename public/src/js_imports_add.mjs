import {js_imports_add_specified} from "./js_imports_add_specified.mjs";
import {todo} from "./todo.mjs";
import {js_identifiers} from "./js_identifiers.mjs";
import {js_imports_existing} from "./js_imports_existing.mjs";
import {list_intersect} from "./list_intersect.mjs";
import {function_names} from "./function_names.mjs";
import {list_difference} from "./list_difference.mjs";
import {js_declaration_single_name} from "./js_declaration_single_name.mjs";
import {js_code_import} from "./js_code_import.mjs";
import {js_parse_first} from "./js_parse_first.mjs";
import {list_add_beginning} from "./list_add_beginning.mjs";
export async function js_imports_add(ast) {
    let names = await function_names();
    js_imports_add_specified(ast, names);
}
