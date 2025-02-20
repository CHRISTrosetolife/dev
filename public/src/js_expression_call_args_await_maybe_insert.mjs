import { list_insert } from "./list_insert.mjs";
import { js_expression_call_args_await_maybe } from "./js_expression_call_args_await_maybe.mjs";
export function js_expression_call_args_await_maybe_insert(
  function_name_called,
  args_names,
  async_is,
  list,
  index_insert,
) {
  let e = js_expression_call_args_await_maybe(
    function_name_called,
    args_names,
    async_is,
  );
  list_insert(list, index_insert, e);
}
