import { data_functions } from "./data_functions.mjs";
import { js_asyncify_recursive } from "./js_asyncify_recursive.mjs";
export async function js_asyncify(f_name) {
  let functions = await data_functions();
  let stack = [];
  await js_asyncify_recursive(f_name, stack, functions);
}
