import { equal_json } from "./equal_json.mjs";
import { json_to } from "./json_to.mjs";
import { string_is } from "./string_is.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { log } from "./log.mjs";
import { list_concat } from "./list_concat.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { list_map } from "./list_map.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { string_includes } from "./string_includes.mjs";
import { function_run } from "./function_run.mjs";
import { error } from "./error.mjs";
export async function tests_generate_single(function_name, args, test_number) {
  let result = await function_run(function_name, args);
  log(test_number.toString(), list_concat(args, [result]));
  let result_name = "result";
  let string_delimeter = "'";
  for (let arg of args) {
    assert_boolean(!string_includes(arg, string_delimeter));
  }
  let args_mapped = list_map(args, (arg) => {
    if (string_is(arg)) {
      return string_delimit(arg);
    }
    error();
  });
  const body_string = `    let ${result_name} = ${function_name}(${args_mapped.join(", ")});
    ${assert_boolean.name}(${equal_json.name}(${result_name}, ${json_to(result)}))`;
  await function_new_generic(
    `${function_name}_test_${test_number}`,
    ``,
    body_string,
    false,
    [],
    false,
  );
}
