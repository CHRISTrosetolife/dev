import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { object_merge } from "./object_merge.mjs";
export async function file_js_transform(lambdas, file_path, args) {
  let ast = await file_js_parse(file_path);
  let results = await list_adder_async(
    async (la) =>
      await each_async(lambdas, async (lambda) => {
        try {
          let result = await lambda(ast, ...args);
          la(result);
        } catch (e) {
          object_merge(e, {
            file_path,
          });
          throw e;
        }
      }),
  );
  let after = await file_js_unparse(file_path, ast);
  return {
    results,
    after,
  };
}
