import {js_unparse} from "./js_unparse.mjs";
import {js_parse} from "./js_parse.mjs";
export function js_code_format(source) {
    let parsed = js_parse(source);
    source = js_unparse(parsed);
    return source;
}
