import { fn_name } from "./fn_name.mjs";
import { function_transform_args_split_lambda } from "./function_transform_args_split_lambda.mjs";
export async function function_aliases_generate_upgrade() {
  await function_transform_args_split_lambda(
    fn_name("function_aliases_generate"),
    [(ast) => {}],
    [],
  );
}
