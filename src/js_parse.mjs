import acorn from 'acorn';
export function js_parse(code) {
    acorn.parse(code, {ecmaVersion: 2020})
}