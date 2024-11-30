import { apps_paths } from "./apps_paths.mjs";
import { generate_list_fn_name } from "./generate_list_fn_name.mjs";
export async function apps_list_generate() {
  await generate_list_fn_name(apps_paths, apps_list_generate);
}
