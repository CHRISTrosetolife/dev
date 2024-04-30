import {import_multi} from "./import_multi.mjs";
let a;
if (typeof window === 'undefined') {
    a = await import('astring');
} else {
    a = astring;
}
if (false) {
    let a = await import_multi('astring', 'astring');
}
let {generate} = a;
export function js_unparse(ast) {
    return generate(ast, {
        indent: '    '
    });
}
