export function js_code_import(import_name) {
    let import_code = js_code_statement(`import { ${import_name} } from "./${import_name}.mjs"`);
    return import_code;
}
