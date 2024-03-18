import { file_copy } from "./file_copy.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { file_js_identifier_rename } from "./file_js_identifier_rename.mjs";

export async function function_copy(fn_name_from, fn_name_to) {
    let fn_path_from = function_name_to_path(fn_name_from);
    let fn_path_to = function_name_to_path(fn_name_to);
    await file_copy(fn_path_from, fn_path_to);
    return;
    file_js_identifier_rename
}