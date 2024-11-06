import { app_sleep_when } from "./app_sleep_when.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { date_to } from "./date_to.mjs";
export function app_sleep_when_get(i) {
  return date_to(object_property_get(i, app_sleep_when()));
}
