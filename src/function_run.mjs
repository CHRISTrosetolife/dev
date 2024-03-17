import path from 'path';
import { function_extension } from './function_extension.mjs';
export async function function_run(first, args) {
    let extension = function_extension();
    let extension_marker = '.';
    let folder_current = '.';
    let first_with_extension = [first, extension_marker, extension].join('');
    let function_path_second = path.join(folder_current, first_with_extension);
    let function_path = './' + function_path_second;
    let imported = await import(function_path);
    let imported_function = imported[first];
    let result = await imported_function(...args);
    return result;
}
