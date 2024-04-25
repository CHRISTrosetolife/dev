import {js_code_statement} from "./js_code_statement.mjs";
import { string_combine } from "./string_combine.mjs";
export function js_code_import(import_name) {
    let import_path = string_combine('./', import_name)
    let import_code = js_code_statement(`import { ${import_name} } from "${import_path}.mjs"`);
    return import_code;
}
