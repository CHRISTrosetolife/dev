import { path_join } from "./path_join.mjs";
export function app_contact_firebase_folder_combine(file_name) {
  let v = path_join(["contact", file_name]);
  return v;
}
