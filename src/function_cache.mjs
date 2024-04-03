import {json_to} from './json_to.mjs';
import {json_from} from './json_from.mjs';
import {path_join} from './path_join.mjs';
import {folder_gitignore} from './folder_gitignore.mjs';
import { string_combine } from './string_combine.mjs';
import { file_exists } from './file_exists.mjs';
import { file_read } from './file_read.mjs';
import { file_write } from './file_write.mjs';
import { string_encoded_to } from './string_encoded_to.mjs';
export async function function_cache(fn, args) {
    let function_name = fn.name;
    let key = {function_name,args};
    let key_json = json_to(key);
    let key_encoded = string_encoded_to(key_json);
    let file_name = string_combine(key_encoded, '.json')
    let file_path = path_join([folder_gitignore(), 'cache', file_name]); 
    let result;
    let json;
    let object;
    if (await file_exists(file_path)) {
        json = await file_read(file_path);
        object = json_from(json);
        let result = object_property_get(object, 'result');
        return result;
    }
    result = await fn(...args);
    object = {result}
    json = json_to(object);
    await file_write(file_path, json);
    return result;
}