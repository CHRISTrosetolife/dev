import {import_multi} from "./import_multi.mjs";
let a = await import_multi('astring', 'astring');
let {generate} = a;
export function js_unparse(ast) {
    return generate(ast, {
        indent: '    '
    });
}
