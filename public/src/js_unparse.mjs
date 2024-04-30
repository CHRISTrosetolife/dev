let astring_import;
if (typeof window === 'undefined') {
    astring_import = await('astring')
}
export function js_unparse(ast) {
    let {generate} = astring_import;
    return generate(ast, {
        indent: '    '
    });
}
