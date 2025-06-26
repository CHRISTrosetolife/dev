import { each } from "./each.mjs";
import { object_values_to_list } from "./object_values_to_list.mjs";
import { list_size } from "./list_size.mjs";
import { list_take_reverse } from "./list_take_reverse.mjs";
import { list_sort_property } from "./list_sort_property.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_filter } from "./object_filter.mjs";
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
import { list_includes_not } from "./list_includes_not.mjs";
import { list_get } from "./list_get.mjs";
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
  function before_trip(key, value) {
    let d = date_to(key);
    let cutoff = new Date("2025-03-22");
    let v4 = d < cutoff;
    return v4;
  }
  function after_trip(key, value) {
    let d = date_to(key);
    let cutoff = new Date("2025-04-04");
    let v4 = d >= cutoff;
    return v4;
  }
  let count = 5;
  let before = longest(merged, before_trip);
  let after = longest(merged, after_trip);
  let parsed = list_adder(function (la) {
    each_object(merged, function (date_string, messages) {
      let date = date_to(date_string);
      la({
        date,
        messages,
      });
    });
  });
  list_sort_property(parsed, "date");
  let recent = list_take_reverse(parsed, count);
  let v = list_get(before, 0);
  let result = "";
  each(v, function (item2) {});
  return v;
  function longest(merged, filter) {
    let filtered = object_filter(merged, filter);
    let filtered2 = object_filter(filtered, function (key, value) {
      let v5 = list_includes_not(
        ["Dec 22, 2022", "Dec 27, 2022", "Dec 28, 2022", "Jul 08, 2023"],
        key,
      );
      return v5;
    });
    let parsed = object_values_to_list(filtered2);
    list_sort_map(parsed, list_size);
    let recent = list_take_reverse(parsed, count);
    let v6 = recent;
    return v6;
  }
}
