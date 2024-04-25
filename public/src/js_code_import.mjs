import {js_code_statement} from "./js_code_statement.mjs";
export function js_code_import(import_name) {
    let import_path = './'
    let import_code = js_code_statement(`import { ${import_name} } from "${import_path}${import_name}.mjs"`);
    return import_code;
}
