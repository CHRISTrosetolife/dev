import {generate} from 'astring';
let astring_import;
export function js_unparse(ast) {
    return generate(ast, {
        indent: '    '
    });
}
