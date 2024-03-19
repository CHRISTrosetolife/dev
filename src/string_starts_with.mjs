import {string_get} from './string_get.mjs';
export function string_starts_with(input, prefix) {
    let string_get_lambda = string_get;
    return string_starts_with_generic(string_get_lambda, input, prefix);
}