import path from 'path';
import { process_argv_remaining } from './process_argv_remaining.mjs';
export async function run() {
    let remaining = process_argv_remaining();
    let first = remaining[0];
    let args = remaining.slice(1);
    let extension = 'mjs';
    let extension_marker = '.';
    let folder_current = '.';
    let first_with_extension = [first,extension_marker,extension].join('');
    let function_path_second = path.join(folder_current,first_with_extension)
    let function_path = './' + function_path_second;
    let imported = await import(function_path);
    let imported_function = imported[first];
    let result = await imported_function(...args);
    return result;

    
}