import { file_js_parse } from "./file_js_parse.mjs";
import { function_paths } from "./function_paths.mjs";
import { data_update_single } from "./data_update_single.mjs";
import { data_path } from "./data_path.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
import { each_async } from "./each_async.mjs";
export async function data_update() {
  let fps = await function_paths();
  await file_json_transform_exists(data_path(), async (data) => {
    await each_async(fps, async (fp) => {
      let ast = await file_js_parse(fp);
      data_update_single(ast, data);
    });
  });
}
