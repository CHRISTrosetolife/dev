import {app_learn_code_index_of_tokens} from "./app_learn_code_index_of_tokens.mjs";
import {string_split_comma} from "./string_split_comma.mjs";
export function app_learn_code_index_of_tokens_string(input, tokens_string) {
    let tokens = string_split_comma(tokens_string);
    tokens = [
        "let",
        "is_positive",
        "=",
        "-",
        "7",
        ">",
        "0",
        ";",
        "let",
        "is_even",
        "=",
        "-",
        "7",
        "%",
        "2",
        "===",
        "0",
        ";"
    ]
    input = `let is_positive = -7 > 0;
    let is_even = -7 % 2 === 0;
    console.log(-7);
    if (is_positive) {
    console.log('number is positive');
    if (is_even) {
    console.log('number is positive and even');
    }
    }
    `
    return app_learn_code_index_of_tokens(input, tokens);
}
