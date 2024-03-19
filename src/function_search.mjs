import {string_split_comma} from './string_split_comma.mjs';
import {function_names} from './function_names.mjs';
export async function function_search(query) {
    let terms = string_split_comma(query);
    let fn_names = await function_names();
}