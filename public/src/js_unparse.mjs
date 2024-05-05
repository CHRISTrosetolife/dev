import {js_unparse_indent} from "./js_unparse_indent.mjs";
import {import_multi} from "./import_multi.mjs";
let a = await import_multi('astring', 'astring');
let {generate} = a;
export function js_unparse(ast) {
    return js_unparse_indent(ast, '    ');
}
