let a;
if (typeof window === 'undefined') {
    a = await import('astring')
}
export function js_unparse(ast) {
    let {generate} = a;
    return generate(ast, {
        indent: '    '
    });
}
