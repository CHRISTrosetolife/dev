import { each_async } from "./each_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
export async function file_js_transform(lambdas, file_path, args) {
  let ast = await file_js_parse(file_path);
  await each_async(lambdas, async (lambda) => {
    await lambda(ast, ...args);
  });
  let result = await file_js_unparse(file_path, ast);
  return result;
}
