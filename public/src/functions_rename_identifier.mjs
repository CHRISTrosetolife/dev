import { functions_identifier } from "./functions_identifier.mjs";
import { function_names } from "./function_names.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_transform_all_args } from "./function_transform_all_args.mjs";
export async function functions_rename_identifier(
  identifier_from,
  identifier_to,
) {
  let function_names_result = await function_names();
  await functions_identifier(identifier_from);
  await function_transform_all_args(
    fn_name("js_identifier_rename"),
    list_join_comma([identifier_from, identifier_to]),
  );
}
