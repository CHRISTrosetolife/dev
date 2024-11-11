import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
import { functions_identifier_list } from "./functions_identifier_list.mjs";
import { each_async } from "./each_async.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_rename_identifier(
  identifier_from,
  identifier_to,
) {
  let matches = await functions_identifier_list(identifier_from);
  await each_async(matches, async (m) => {
    await function_transform_args_split_lambda(
      [fn_name("js_identifier_rename")],
      m,
      [identifier_from, identifier_to],
    );
  });
}
