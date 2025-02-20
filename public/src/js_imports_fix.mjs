import { log } from "./log.mjs";
import { js_imports_remove } from "./js_imports_remove.mjs";
import { js_imports_add } from "./js_imports_add.mjs";
export async function js_imports_fix(ast) {
  await js_imports_add(ast);
  js_imports_remove(ast);
  log("here");
}
