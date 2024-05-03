import {js_code_statement_assign} from "./js_code_statement_assign.mjs";
import {js_code_statement} from "./js_code_statement.mjs";
import {js_code_assign} from "./js_code_assign.mjs";
export function lesson_variable_code_get(name, value) {
    return `let ${name};
${js_code_statement_assign(name, value)}
console.log(${name});`;
}
