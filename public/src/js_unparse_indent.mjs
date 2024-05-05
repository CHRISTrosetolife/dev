export function js_unparse_indent(ast, indent) {
    return generate(ast, {
        indent: indent
    });
}
