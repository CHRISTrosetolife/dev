import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
export async function app_code_user_upload(context, file_name, object) {
  let file_path = app_code_local_user_path(context, file_name);
  await firebase_upload_object(file_path, object);
  let v = file_path;
  return v;
}
