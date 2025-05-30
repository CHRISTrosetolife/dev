import { assert_message } from "./assert_message.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { noop } from "./noop.mjs";
import { data_identifiers_each_transform_params } from "./data_identifiers_each_transform_params.mjs";
export async function function_calls_params_size_assert(
  function_name,
  expected,
) {
  await data_identifiers_each_transform_params(
    function_name,
    function on_call(params, function_name) {
      let s = list_size(params);
      assert_message(equal, [s, expected], function () {
        let v2 = {
          function_name,
          expected,
          params,
          expected,
          s,
        };
        return v2;
      });
    },
    noop,
  );
}
