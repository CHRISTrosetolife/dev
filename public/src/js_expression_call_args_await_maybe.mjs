import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_map } from "./list_map.mjs";
import { js_expression_call_args } from "./js_expression_call_args.mjs";
import { identity } from "./identity.mjs";
import { js_expression_await } from "./js_expression_await.mjs";
export function js_expression_call_args_await_maybe(
  function_name_called,
  args_names,
  async_is,
) {
  let wrapper = async_is ? js_expression_await : identity;
  let e = wrapper(
    js_expression_call_args(
      function_name_called,
      list_map(args_names, js_parse_expression),
    ),
  );
  return e;
}
