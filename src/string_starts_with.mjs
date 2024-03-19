import {string_length} from './string_length.mjs';
import {range} from './range.mjs';
import {string_get} from './string_get.mjs';
export function string_starts_with(input, prefix) {
    let string_get_lambda = string_get;
    let input_length = string_length(input);
    let prefix_length = string_length(prefix);
    if (input_length < prefix_length) {
        return false;
    }
    for (let i of range(prefix_length)) {
        if (string_get_lambda(input, i) !== string_get_lambda(prefix, i)) {
            return false;
        }
    }
    return true;
}