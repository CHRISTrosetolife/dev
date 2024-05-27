import { app_dev } from "./app_dev.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_dev_screen_name(name) {
  const s = "_screen_";
  let lesson_name = string_combine_multiple([app_dev.name, s, name]);
  return lesson_name;
}
