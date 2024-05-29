import { each_async } from "./each_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { list_length_1 } from "./list_length_1.mjs";
import { list_single } from "./list_single.mjs";
export async function file_js_transform(lambdas, file_path, args) {
  let ast = await file_js_parse(file_path);
  await each_async(lambdas, async (lambda) => {
    await lambda(ast, ...args);
  });
  let result = await file_js_unparse(file_path, ast);
  if (list_length_1(result)) {
    return list_single(result);
  }
  return result;
}
