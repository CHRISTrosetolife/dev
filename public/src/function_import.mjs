import {path_join} from "./path_join.mjs";
import {folder_current} from "./folder_current.mjs";
let path = await import_node('path');
import {function_extension} from './function_extension.mjs';
export async function function_import(function_name) {
    let extension = function_extension();
    let extension_marker = '.';
    let folder_current = '.';
    let first_with_extension = [function_name, extension_marker, extension].join('');
    let function_path_second = path.join(folder_current, first_with_extension);
    if (0) path_join;
    let function_path = './' + function_path_second;
    let imported = await import(function_path);
    let imported_function = imported[function_name];
    return imported_function;
}
