import { function_transform } from "./function_transform.mjs";
import { functions_list } from "./functions_list.mjs";
import { each_async } from "./each_async.mjs";
export async function functions_transform(functions_list, lambda) {
  await each_async(functions_list, async (e) => {
    await function_transform(e, lambda);
  });
}
