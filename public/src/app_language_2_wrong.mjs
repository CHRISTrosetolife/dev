import { app_language_2_stats_get } from "./app_language_2_stats_get.mjs";
import { app_language_2_count_increment } from "./app_language_2_count_increment.mjs";
import { storage_local_increment } from "./storage_local_increment.mjs";
import { round } from "./round.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function app_language_2_wrong(context, v, gap_initial, wait_initial) {
  let gap = object_property_get(v, "gap");
  let rounded = round(gap);
  let { app_fn } = context;
  let stats = app_language_2_stats_get(app_fn);
  let r = object_property_get(stats, "wrong");
  object_property_increment(r, rounded);
  storage_local_set(app_fn, "stats", stats);
  object_property_set(v, "gap", gap_initial);
  object_property_set(v, "wait", wait_initial);
  app_language_2_count_increment(context);
  storage_local_increment(app_fn, "count_wrong");
}
