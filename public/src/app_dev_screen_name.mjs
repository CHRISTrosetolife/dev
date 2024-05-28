import { app_dev_screen_prefix } from "./app_dev_screen_prefix.mjs";
import { string_combine } from "./string_combine.mjs";
export function app_dev_screen_name(name) {
  let prefix = app_dev_screen_prefix();
  let lesson_name = string_combine(prefix, name);
  return lesson_name;
}
