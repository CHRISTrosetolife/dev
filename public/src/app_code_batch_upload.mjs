import { app_code_user_upload_batch } from "./app_code_user_upload_batch.mjs";
import { app_code_property_deleted } from "./app_code_property_deleted.mjs";
import { app_code_property_contents } from "./app_code_property_contents.mjs";
import { object_properties_new } from "./object_properties_new.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { global_file_changes } from "./global_file_changes.mjs";
export async function app_code_batch_upload(context, batch_message) {
  let fcs = global_file_changes();
  let files = {};
  each(fcs, function (fc) {
    let path2 = object_property_get(fc, "path");
    object_property_set(
      files,
      path2,
      object_properties_new(fc, [
        app_code_property_contents(),
        app_code_property_deleted(),
      ]),
    );
  });
  let upload = true;
  if (upload) {
    await app_code_user_upload_batch(context, files, batch_message);
  }
}
