import { app_name_string } from "./app_name_string.mjs";
export function app_name(app_function) {
  let app_name_prefixed = app_function.name;
  let v = app_name_string(app_name_prefixed);
  return v;
}
