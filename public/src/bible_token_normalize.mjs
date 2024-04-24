import {string_case_lower} from "./string_case_lower.mjs";
import {string_replace_multiple} from "./string_replace_multiple.mjs";
export function bible_token_normalize(token) {
    let mapped3 = string_case_lower(token);
    let symbols = [',', '1', '2', '.', ';', '“', '”', ':'];
    let mapped4 = string_replace_multiple(mapped3, symbols, '');
    return mapped4;
}
