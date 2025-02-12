import { functions_list } from "./functions_list.mjs";
import { file_js_transform_regular } from "./file_js_transform_regular.mjs";
import { log } from "./log.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { each_async } from "./each_async.mjs";
export async function functions_transform(functions_list, lambda) {
  await each_async(functions_list, async (e) => {
    await function_transform(e, lambda);
  });
}
async function function_transform(e, lambda) {
    let file_path = function_name_to_path(e);
    log({
        file_path,
        e,
    });
    await file_js_transform_regular(file_path, lambda);
}

