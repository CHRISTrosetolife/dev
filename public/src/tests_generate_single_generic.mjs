import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { string_to } from "./string_to.mjs";
import { equal } from "./equal.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement_assign } from "./js_code_statement_assign.mjs";
import { json_to } from "./json_to.mjs";
import { list_get } from "./list_get.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { error } from "./error.mjs";
import { string_is } from "./string_is.mjs";
import { list_map } from "./list_map.mjs";
import { string_includes } from "./string_includes.mjs";
import { assert_boolean } from "./assert_boolean.mjs";
import { log } from "./log.mjs";
import { function_run } from "./function_run.mjs";
import { identity } from "./identity.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_join } from "./list_join.mjs";
import { number_is } from "./number_is.mjs";
import { list_is } from "./list_is.mjs";
export async function tests_generate_single_generic(
  function_name,
  args,
  test_number,
  args_mappers,
  result_mapper,
) {
  let args_mapped3 = list_map_index(args, (a, index) => {
    let mapper = list_get(args_mappers, index);
    return mapper(a);
  });
  let result = await function_run(function_name, args_mapped3);
  result = result_mapper(result);
  log(
    string_combine_multiple([
      test_number.toString(),
      " ",
      list_join(args, " "),
      " ",
      result,
    ]),
  );
  let result_name = "result";
  let string_delimeter = "'";
  for (let arg of args) {
    if (string_is(arg)) {
      assert_boolean(!string_includes(arg, string_delimeter));
    }
  }
  let args_mapped = list_map(args, function js_code_recursive(arg) {
    if (string_is(arg)) {
      return js_code_string(arg);
    }
    if (number_is(arg)) {
      return string_to(arg);
    }
    if (list_is(arg)) {
      return js_code_array(list_map(arg, js_code_recursive));
    }
    error();
  });
  let args_mapped2 = list_map_index(args_mapped, (a, index) => {
    let mapper = list_get(args_mappers, index);
    if (equal(mapper, identity)) {
      return a;
    }
    return js_code_call_args(mapper.name, [a]);
  });
  let body_string = string_combine_multiple([
    "    let ",
    result_name,
    " = ",
    function_name,
    "(",
    args_mapped2.join(", "),
    ");\n    ",
    equal(result_mapper, identity)
      ? ""
      : js_code_statement_assign(
          result_name,
          js_code_call_args(result_mapper.name, [result_name]),
        ),
    " \n    ",
    fn_name("assert_boolean"),
    "(",
    fn_name("equal_json"),
    "(",
    result_name,
    ", ",
    json_to(result),
    "))",
  ]);
  await function_new_generic_code(
    string_combine_multiple([function_name, "_test_", test_number]),
    string_combine_multiple([]),
    body_string,
    false,
    [],
    false,
    true,
  );
}
