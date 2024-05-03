import {string_delimit} from "./string_delimit.mjs";
import {string_is} from "./string_is.mjs";
export function string_delimit_if(value) {
    let value_string;
    if (string_is(value)) {
        value_string = string_delimit(value);
    }
    return value_string;
}
