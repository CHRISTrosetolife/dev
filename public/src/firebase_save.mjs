import { object_property_exists } from "./object_property_exists.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { equal } from "./equal.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { firebase_download } from "./firebase_download.mjs";
import { object_property_initialize_increment } from "./object_property_initialize_increment.mjs";
export async function firebase_save(storage_path, object_data) {
  let version_property = "version";
  let version = object_property_initialize_increment(
    object_data,
    version_property,
    1,
  );
  let existing = await firebase_download(storage_path);
  let version_previous;
  if (object_property_exists(existing, version_property)) {
    version_previous = object_property_get(existing, version_property);
  } else {
  }
  if ((equal, [version, version_previous + 1])) {
    await firebase_upload_object(storage_path, object_data);
  } else {
    alert("data out of date");
  }
}
