import { string_combine } from "./string_combine.mjs";
export function app_dev_screen_name(name) {
  const prefix = "lesson_";
  let lesson_name = string_combine(prefix, name);
  return lesson_name;
}
