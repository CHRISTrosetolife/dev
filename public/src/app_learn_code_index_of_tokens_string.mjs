import {app_learn_code_index_of_tokens} from "./app_learn_code_index_of_tokens.mjs";
import {string_split_comma} from "./string_split_comma.mjs";
export function app_learn_code_index_of_tokens_string(input, tokens_string) {
    let tokens = string_split_comma(tokens_string);
    return app_learn_code_index_of_tokens(input, tokens);
}
