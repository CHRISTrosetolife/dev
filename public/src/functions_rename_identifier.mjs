import { functions_identifier_list } from "./functions_identifier_list.mjs";
import { each_async } from "./each_async.mjs";
import { function_transform_args_split } from "./function_transform_args_split.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_rename_identifier(
  identifier_from,
  identifier_to,
) {
  let matches = await functions_identifier_list(identifier_from);
  await each_async(matches, async (m) => {
    await function_transform_args_split([fn_name("js_identifier_rename")], m, [
      identifier_from,
      identifier_to,
    ]);
  });
}
