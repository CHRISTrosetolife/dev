import { generate } from 'astring'

export function js_unparse(ast) {
    console.log({ast})
    return generate(ast);
}