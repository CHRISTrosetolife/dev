import { string_combine } from "./string_combine.mjs";
import { app_dev } from "./app_dev.mjs";
export function app_dev_screen_name(name) {
  let s = "_screen_";
  let prefix = string_combine(app_dev.name, s);
  let lesson_name = string_combine(prefix, name);
  return lesson_name;
}
