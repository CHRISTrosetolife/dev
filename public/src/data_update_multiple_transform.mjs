import { data_update_single } from "./data_update_single.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { each_async } from "./each_async.mjs";
export async function data_update_multiple_transform(fps, data) {
  await each_async(fps, async (fp) => {
    let ast = await file_js_parse(fp);
    data_update_single(ast, data);
  });
}
