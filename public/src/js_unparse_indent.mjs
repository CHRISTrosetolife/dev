import {import_multi} from "./import_multi.mjs";
import {import_node} from "./import_node.mjs";
import {web_is} from "./web_is.mjs";
let a = await import_node('astring');
export function js_unparse_indent(ast, indent) {
    if (web_is()) {
        a = astring;
    }
    let {generate} = a;
    return generate(ast, {
        indent: indent
    });
}
