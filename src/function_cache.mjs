import {json_to} from './json_to.mjs';
export async function function_cache(fn, args) {
    let function_name = fn.name;
    let key = {function_name,args};
    let key_json = json_to(key);
    let result = await fn(...args);
}