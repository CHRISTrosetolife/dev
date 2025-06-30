import { js_asyncify_recursive } from "./js_asyncify_recursive.mjs";
export async function js_asyncify(this_name, stack, functions) {
  await js_asyncify_recursive(this_name, stack, functions);
}
