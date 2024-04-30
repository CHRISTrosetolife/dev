let a;
if (typeof window === 'undefined') {
    a = await import('astring')
} else {
    a = astring;
}
let {generate} = a;
export function js_unparse(ast) {
    return generate(ast, {
        indent: '    '
    });
}
