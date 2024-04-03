import {string_combine} from "./string_combine.mjs";
export function string_combine_multiple(list) {
    let result = '';
    for (let l of list) {
        result = string_combine(result, l);
    }
    return result;
}
