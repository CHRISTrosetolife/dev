import { data_update_single } from "./data_update_single.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { each_async } from "./each_async.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
import { data_path } from "./data_path.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
export async function data_update_multiple(fps) {
  await file_delete_if_exists(data_path());
  await file_json_transform_exists(data_path(), async (data) => {
    await each_async(fps, async (fp) => {
      let ast = await file_js_parse(fp);
      data_update_single(ast, data);
    });
  });
}
