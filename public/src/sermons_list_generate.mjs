import { generate_list_fn } from "./generate_list_fn.mjs";
import { apps_paths } from "./apps_paths.mjs";
export async function sermons_list_generate() {
  await generate_list_fn(apps_paths, sermons_list_generate);
}
