import acorn from 'acorn';
export function function_parse(function_name) {
    acorn.parse("1 + 1", {ecmaVersion: 2020})
}