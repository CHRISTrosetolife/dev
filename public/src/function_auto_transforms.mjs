import { js_fn_name } from "./js_fn_name.mjs";
import { js_template_to_function } from "./js_template_to_function.mjs";
import { js_dollar } from "./js_dollar.mjs";
import { js_assert_arguments_length } from "./js_assert_arguments_length.mjs";
import { js_while_to_block } from "./js_while_to_block.mjs";
import { js_if_to_block } from "./js_if_to_block.mjs";
import { js_assign_to_let } from "./js_assign_to_let.mjs";
import { js_await_add } from "./js_await_add.mjs";
import { js_const_to_let } from "./js_const_to_let.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
export function function_auto_transforms() {
  return [
    js_dollar,
    js_fn_name,
    js_template_to_function,
    js_assert_arguments_length,
    js_if_to_block,
    js_while_to_block,
    js_const_to_let,
    js_assign_to_let,
    js_await_add,
    js_outside_move,
    js_imports_fix,
  ];
}
