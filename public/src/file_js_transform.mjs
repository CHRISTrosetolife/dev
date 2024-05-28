import { each_async } from "./each_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { list_length_1 } from "./list_length_1.mjs";
import { list_single } from "./list_single.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { log } from "./log.mjs";
export async function file_js_transform(lambdas, file_path, args) {
  let ast = await file_js_parse(file_path);
  let results = await list_adder_async(async (la) => {
    each_async(lambdas, async (lambda) => {
        log({
          lambda,
        });
      let result = await lambda(ast, ...args);
      la(result);
    });
  });
  await file_js_unparse(file_path, ast);
  if (list_length_1(results)) {
    return list_single(results);
  }
  return results;
}
