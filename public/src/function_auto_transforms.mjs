import { js_const_to_let } from "./js_const_to_let.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
export function function_auto_transforms() {
  return [js_const_to_let, js_outside_move, js_imports_fix];
}
