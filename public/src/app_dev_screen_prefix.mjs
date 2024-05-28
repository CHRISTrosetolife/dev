import { app_dev } from "./app_dev.mjs";
import { string_combine } from "./string_combine.mjs";
export function app_dev_screen_prefix() {
  let s = "_screen_";
  let prefix = string_combine(app_dev.name, s);
  return prefix;
}
