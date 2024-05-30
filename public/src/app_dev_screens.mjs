import { app_dev_screen_function_new } from "./app_dev_screen_function_new.mjs";
import { app_dev_screen_git_auto } from "./app_dev_screen_git_auto.mjs";
import { app_dev_screen_command_line } from "./app_dev_screen_command_line.mjs";
import { app_dev_screen_overview } from "./app_dev_screen_overview.mjs";
import { list_add } from "./list_add.mjs";
import { marker } from "./marker.mjs";
export function app_dev_screens() {
  let result = [];
  list_add(result, app_dev_screen_overview);
  list_add(result, app_dev_screen_command_line);
  list_add(result, app_dev_screen_git_auto);
  list_add(result, app_dev_screen_function_new);
  marker();
  return result;
}
