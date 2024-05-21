import { equal } from "./equal.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { function_new_generic } from "./function_new_generic.mjs";
import { json_to } from "./json_to.mjs";
import { equal_json } from "./equal_json.mjs";
import { list_get } from "./list_get.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { error } from "./error.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { string_is } from "./string_is.mjs";
import { list_map } from "./list_map.mjs";
import { string_includes } from "./string_includes.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { list_concat } from "./list_concat.mjs";
import { log } from "./log.mjs";
import { function_run } from "./function_run.mjs";
import { identity } from "./identity.mjs";
export async function tests_generate_single_generic(
  function_name,
  args,
  test_number,
  args_mappers,
  result_mapper,
) {
  let result = await function_run(function_name, args);
  result = result_mapper(result);
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
  let args_mapped2 = list_map_index(args_mapped, (a, index) => {
    let mapper = list_get(args, index);
    if (equal(mapper, identity)) {
      return a;
    }
    return js_code_call_args(mapper.name, [a]);
  });
  const body_string = `    let ${result_name} = ${function_name}(${args_mapped2.join(", ")});
    ${equal(result_mapper, identity) ? "" : js_code_statement_assign(result_name, js_code_call_args(result_mapper.name, [result_name]))} 
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
