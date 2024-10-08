import { app_save_change } from "./app_save_change.mjs";
import { app_code_refresh } from "./app_code_refresh.mjs";
import { app_code } from "./app_code.mjs";
export async function app_code_save_refresh(root, lambda) {
  let save = await app_save_change(app_code, lambda);
  await app_code_refresh(root);
  return save;
}
