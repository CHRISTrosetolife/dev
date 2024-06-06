import { js_while_to_block } from "./js_while_to_block.mjs";
import { js_if_to_block } from "./js_if_to_block.mjs";
import { js_assign_to_let } from "./js_assign_to_let.mjs";
import { js_await_add } from "./js_await_add.mjs";
import { js_const_to_let } from "./js_const_to_let.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
export function function_auto_transforms() {
  return [
    js_if_to_block,
    js_while_to_block,
    js_const_to_let,
    js_assign_to_let,
    js_await_add,
    js_outside_move,
    js_imports_fix,
  ];
}
