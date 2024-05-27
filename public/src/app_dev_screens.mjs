import { list_add } from "./list_add.mjs";

export function app_dev_screens() {
  let result = [];
  list_add(result, app_dev_screen_overview())
  return result;
}
