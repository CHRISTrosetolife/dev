import { json_format_to } from "./json_format_to.mjs";
import { html_inner_set } from "./html_inner_set.mjs";
import { firebase_save } from "./firebase_save.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function app_sleep_save(
  today,
  list_name,
  now,
  month_path,
  data,
  result,
) {
  let list = object_property_initialize(today, list_name, []);
  list_add(list, now);
  await firebase_save(month_path, data);
  html_inner_set(result, json_format_to(list));
}
