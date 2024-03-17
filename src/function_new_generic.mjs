import { file_new } from './file_new.mjs';
import { file_open } from './file_open.mjs';
import { function_name_to_path } from './function_name_to_path.mjs';

export async function function_new_generic(function_name, args_string) {
    let contents = `export function ${function_name}(${args_string}) {

}`;
    const file_path = function_name_to_path(function_name);
    await file_new(file_path, contents);
    await file_open(file_path);
}

