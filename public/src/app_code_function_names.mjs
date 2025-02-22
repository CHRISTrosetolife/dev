import { functions_names } from "./functions_names.mjs";
import { app_code_files_get } from "./app_code_files_get.mjs";
export async function app_code_function_names() {
  await app_code_files_get();
  let existing = await functions_names();
  return existing;
}
