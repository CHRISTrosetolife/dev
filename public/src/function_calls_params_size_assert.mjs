import { noop } from "./noop.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { assert } from "./assert.mjs";
import { data_identifiers_each_transform_params } from "./data_identifiers_each_transform_params.mjs";
export async function function_calls_params_size_assert(
  function_name,
  expected,
) {
  await data_identifiers_each_transform_params(
    function_name,
    function on_call(params) {
      assert(list_size_equal, [params, expected]);
    },
    noop,
  );
}
