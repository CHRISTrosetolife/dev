import {folder_current} from "./folder_current.mjs";
import {js_code_import_path} from "./js_code_import_path.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
import {string_combine} from "./string_combine.mjs";
export function js_code_import(import_name) {
    const import_path = `${folder_current()}/`;
    let import_code = js_code_import_path(import_path, import_name);
    return import_code;
}
