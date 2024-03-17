import {string_split_comma} from './string_split_comma.mjs';
export async function function_search(query) {
    let terms = string_split_comma(query);
    let function_names = await function_names();
}