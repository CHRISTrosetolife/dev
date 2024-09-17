import { function_paths } from "./function_paths.mjs";
import { data_update_single } from "./data_update_single.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { each_async } from "./each_async.mjs";
export async function data_update_multiple_transform(function_paths, data) {
  await each_async(function_paths, async (fp) => {
    let ast = await file_js_parse(fp);
    data_update_single(ast, data);
  });
}
