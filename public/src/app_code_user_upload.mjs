import { app_code_local_user_path_web } from "./app_code_local_user_path_web.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
export async function app_code_user_upload(context, file_name, object) {
  let file_path = app_code_local_user_path_web(context, file_name);
  await firebase_upload_object(file_path, object);
  let v = file_path;
  return v;
}
