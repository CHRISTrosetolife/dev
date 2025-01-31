import { app_language_2_stats_get } from "./app_language_2_stats_get.mjs";
import { app_language_2_count_increment } from "./app_language_2_count_increment.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { object_property_increment } from "./object_property_increment.mjs";
import { round } from "./round.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { random } from "./random.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_language_2_gaps_get } from "./app_language_2_gaps_get.mjs";
export function app_language_2_learn_success(
  context,
  value_word,
  stats_update,
) {
  let { app_fn } = context;
  let gaps = app_language_2_gaps_get(context);
  let gap = object_property_get(value_word, "gap");
  let f = list_filter(gaps, (g) => g > gap);
  if (list_empty_is(f)) {
    list_add(f, list_last(gaps));
  }
  let gap_new = list_first(f) + random();
  object_property_set(value_word, "gap", gap_new);
  object_property_set(value_word, "wait", gap_new);
  if (stats_update) {
    let stats = app_language_2_stats_get(app_fn);
    let r = object_property_get(stats, "right");
    let rounded = round(gap);
    object_property_increment(r, rounded);
    storage_local_set(app_fn, "stats", stats);
  }
  app_language_2_count_increment(context);
}
