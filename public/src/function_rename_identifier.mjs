import { fn_name } from "./fn_name.mjs";
import { function_transform_all_args } from "./function_transform_all_args.mjs";
export async function function_rename_identifier(
  identifier_from,
  identifier_to,
) {
  await function_transform_all_args(fn_name("js_identifier_rename"), [
    identifier_from,
    identifier_to,
  ]);
  return r;
}
