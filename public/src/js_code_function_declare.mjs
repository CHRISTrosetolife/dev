export function js_code_function_declare(
  function_name,
  args_string,
  body_string,
) {
  return `function ${function_name}(${args_string}) {
  ${body_string}
}`;
}
