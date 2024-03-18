import * as acorn from 'acorn';
export function js_parse(code) {
    return acorn.parse(code, {ecmaVersion: 2020})
}