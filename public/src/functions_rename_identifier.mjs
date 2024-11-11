import { function_transform_args_split } from "./function_transform_args_split.mjs";
import { functions_identifier } from "./functions_identifier.mjs";
import { function_names } from "./function_names.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_rename_identifier(
  identifier_from,
  identifier_to,
) {
  let function_names_result = await function_names();
  await functions_identifier(identifier_from);
  let r = await function_transform_args_split(
    [fn_name("js_identifier_rename")],
    function_name,
    [identifier_from, identifier_to],
  );
}
