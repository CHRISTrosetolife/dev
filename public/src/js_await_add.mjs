import { data_functions } from "./data_functions.mjs";
import { js_await_add_recursive } from "./js_await_add_recursive.mjs";
export async function js_await_add(ast) {
  let stack = [];
  let functions = await data_functions();
  await js_await_add_recursive(stack, ast, functions);
}
