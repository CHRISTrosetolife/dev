import {js_parse_options} from "./js_parse_options.mjs";
let acorn_imported;
if (undefined_is(window)) {
    acorn_imported = await import('acorn')
}
export function js_parse(code) {
    return (acorn || acorn_imported).parse(code, js_parse_options());
}
