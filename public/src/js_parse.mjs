import {js_parse_options} from "./js_parse_options.mjs";
let acorn = await import('acorn')
export function js_parse(code) {
    return acorn.parse(code, js_parse_options());
}
