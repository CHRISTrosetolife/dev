import { js_stack_find_list } from "./js_stack_find_list.mjs";
export function js_stack_find_list_visitor(v) {
  let { stack } = v;
  let v2 = js_stack_find_list(stack);
  return v2;
}
