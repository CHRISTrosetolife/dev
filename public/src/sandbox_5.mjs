import { list_sort_map } from "./list_sort_map.mjs";
import { date_to } from "./date_to.mjs";
import { each_object } from "./each_object.mjs";
import { groups_merge } from "./groups_merge.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_property_string_empty_not_is } from "./list_filter_property_string_empty_not_is.mjs";
import { facebook_data_messages_date_get } from "./facebook_data_messages_date_get.mjs";
import { list_to_groups } from "./list_to_groups.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { grace_facebook_data_messages_jared_parsed_cache } from "./grace_facebook_data_messages_jared_parsed_cache.mjs";
export async function sandbox_5() {
  let threads = await grace_facebook_data_messages_jared_parsed_cache();
  let mapped = list_map(threads, function (thread) {
    let messages = object_property_get(thread, "messages");
    messages = list_filter_property_string_empty_not_is(messages, "message");
    let result = list_to_groups(messages, facebook_data_messages_date_get);
    let v2 = result;
    return v2;
  });
  let merged = groups_merge(mapped);
  each_object(merged, function (date, messages) {
    list_sort_map(messages, function (item) {
      let when = object_property_get(item, "when");
      let wd = date_to(when);
      let v3 = wd;
      return v3;
    });
  });
  let result = [];
  let predicate = function (key, value) {
    let d = date_to(key);
    let cutoff = new Date("2025-03-22");
    let v4 = d < cutoff;
    return v4;
  };
  each_object(merged, function (date, messages) {});
  let v = merged;
  return v;
}
