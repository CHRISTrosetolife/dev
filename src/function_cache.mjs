import {json_to} from './json_to.mjs';
export function function_cache(function_name, args) {
    let key = {function_name,args};
    let key_json = json_to(key);
}