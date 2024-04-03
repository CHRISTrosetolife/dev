import {json_to} from './json_to.mjs';
import {json_from} from './json_from.mjs';
import {path_join} from './path_join.mjs';
import {folder_gitignore} from './folder_gitignore.mjs';
import { string_combine } from './string_combine.mjs';
import { file_exists } from './file_exists.mjs';
import { file_read } from '../public/src/file_read.mjs';
export async function function_cache(fn, args) {
    let function_name = fn.name;
    let key = {function_name,args};
    let key_json = json_to(key);
    let file_name = string_combine(key_json, '.json')
    let file_path = path_join([folder_gitignore(), 'cache', file_name]); 
    let result;
    if (await file_exists(file_path)) {
        let json = await file_read(file_path);
        result = json_from(json);
        return result;
    }
    result = await fn(...args);
}