export function lesson_variable_code_get(name, value) {
    return `let ${name};
${name} = ${value};
console.log(${name});`;
}
