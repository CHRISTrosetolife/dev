import { file_new } from './file_new.mjs';
import { function_name_to_path } from './function_name_to_path.mjs';

export async function function_new_generic(function_name, args_joined) {
    let contents = `export function ${function_name}(${args_joined}) {

}`;
    await file_new(function_name_to_path(function_name), contents);
}

