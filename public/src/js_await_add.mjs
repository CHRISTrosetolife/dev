import { js_await_add_recursive } from "./js_await_add_recursive.mjs";
export async function js_await_add(ast) {
  let stack = [];
  await js_await_add_recursive(ast, stack);
}
