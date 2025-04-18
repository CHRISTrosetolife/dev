import { storage_upload_object } from "./storage_upload_object.mjs";
import { app_language_group_path } from "./app_language_group_path.mjs";
export async function app_language_group_upload(
  profile,
  group_index,
  result_new,
) {
  let storage_path = app_language_group_path(
    profile.from,
    profile.to,
    group_index,
  );
  let existing_path = await storage_upload_object(storage_path, result_new);
  return existing_path;
}
