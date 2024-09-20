import { object_property_delete } from "./object_property_delete.mjs";
import { app_code_save_refresh } from "./app_code_save_refresh.mjs";
export async function app_code_save_delete_refresh(root, property_name_save) {
  await app_code_save_refresh(root, (save) =>
    object_property_delete(save, property_name_save),
  );
}
