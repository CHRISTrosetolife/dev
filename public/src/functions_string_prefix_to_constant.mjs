import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { fn_name } from "./fn_name.mjs";
import { string_size } from "./string_size.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { string_is_starts_with } from "./string_is_starts_with.mjs";
import { js_parent_replace } from "./js_parent_replace.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { string_slashes_escape } from "./string_slashes_escape.mjs";
import { string_delimit } from "./string_delimit.mjs";
import { log } from "./log.mjs";
import { data_functions } from "./data_functions.mjs";
import { each_object } from "./each_object.mjs";
import { string_is } from "./string_is.mjs";
import { each } from "./each.mjs";
import { assert } from "./assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_visit_node } from "./js_visit_node.mjs";
import { string_skip } from "./string_skip.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
export async function functions_string_prefix_to_constant(
  prefix,
  constant_name,
) {
  for (let i of [prefix, constant_name]) {
    assert(string_is, [i]);
  }
  let fp = function_name_to_path(constant_name);
  if (!(await file_exists(fp))) {
    let code = js_code_statement_return(
      string_delimit(string_slashes_escape(prefix)),
    );
    await function_new_generic_code(
      constant_name,
      "",
      code,
      false,
      [],
      false,
      false,
    );
  }
  let functions = await data_functions();
  each_object(functions, async (function_name, details) => {
    let { literals } = details;
    each(literals, async (literal) => {
      if (string_is_starts_with(literal, prefix)) {
        await function_transform_args_split_lambda(
          function_name,
          [
            async (ast) => {
              js_visit_node(ast, "Literal", (v) => {
                let { node } = v;
                let { value } = node;
                if (string_is_starts_with(value, prefix)) {
                  let s = string_skip(value, string_size(prefix));
                  let unparsed = js_code_string(s);
                  let code = js_code_call_args(fn_name("string_combine"), [
                    js_code_call(constant_name),
                    unparsed,
                  ]);
                  js_parent_replace(v, node, js_parse_expression(code));
                }
              });
              await js_imports_fix(ast);
            },
          ],
          [],
        );
        log({
          function_name,
        });
      }
    });
  });
}
