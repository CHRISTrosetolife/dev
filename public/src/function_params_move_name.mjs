import { function_params_names_assert_calls_params_size } from "./function_params_names_assert_calls_params_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_sort } from "./list_sort.mjs";
import { function_param_move_index } from "./function_param_move_index.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_index } from "./list_index.mjs";
export async function function_params_move_name(
  function_name,
  name_old,
  name_new,
) {
  assert_arguments_length(arguments, 3);
  let params_names =
    await function_params_names_assert_calls_params_size(function_name);
  let index_old = list_index(params_names, name_old);
  let index_new = list_index(params_names, name_new);
  let indices = [index_old, index_new];
  "at this time, ",
    function_param_move_index,
    " requires the larger index to be first";
  list_sort(indices);
  await function_param_move_index(
    function_name,
    list_second(indices),
    list_first(indices),
  );
}
