let a = await import_multi('astring', 'astring');
let {generate} = a;
export function js_unparse_indent(ast, indent) {
    return generate(ast, {
        indent: indent
    });
}
