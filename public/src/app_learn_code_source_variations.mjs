import {js_node_type} from "./js_node_type.mjs";
import {js_parse} from "./js_parse.mjs";
export function app_learn_code_source_variations(source) {
    let parsed = js_parse(source);
    js_node_type(parsed);
}
