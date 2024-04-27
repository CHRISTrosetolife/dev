import {js_parse_options} from "./js_parse_options.mjs";
export function js_tokenize(code) {
    return acorn.tokenizer(code, js_parse_options());
}
