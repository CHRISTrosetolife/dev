import {js_unparse_indent} from "./js_unparse_indent.mjs";
export function js_unparse(ast) {
    return js_unparse_indent(ast, '    ');
}
