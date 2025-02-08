import { functions_names } from "./functions_names.mjs";
import { js_imports_add_specified } from "./js_imports_add_specified.mjs";
export async function js_imports_add(ast) {
  let names = await functions_names();
  js_imports_add_specified(ast, names);
}
