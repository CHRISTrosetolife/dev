import { list_sort_property } from "./list_sort_property.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { object_filter } from "./object_filter.mjs";
import { date_to } from "./date_to.mjs";
import { list_sort_map } from "./list_sort_map.mjs";
import { each_object } from "./each_object.mjs";
import { groups_merge } from "./groups_merge.mjs";
import { facebook_data_messages_date_get } from "./facebook_data_messages_date_get.mjs";
import { list_to_groups } from "./list_to_groups.mjs";
import { list_filter_property_string_empty_not_is } from "./list_filter_property_string_empty_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
import { grace_facebook_data_messages_jared_parsed_cache } from "./grace_facebook_data_messages_jared_parsed_cache.mjs";
export async function grace_facebook_data_messages_jared_parsed_list() {
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
  let filtered2 = object_filter(merged, function (key, value) {
    let v5 = list_includes_not(
      list_concat(
        [
          "Dec 22, 2022",
          "Dec 25, 2022",
          "Dec 27, 2022",
          "Dec 28, 2022",
          "Dec 30, 2022",
          "Dec 31, 2022",
          "Jun 13, 2023",
          "Jul 08, 2023",
          "Jul 19, 2023",
          "Jul 20, 2023",
          "Feb 12, 2024",
          "Feb 26, 2024",
          "Apr 22, 2024",
          "May 18, 2024",
          "Jul 16, 2024",
          "Jul 22, 2024",
          "Nov 02, 2024",
          "Nov 28, 2024",
          "Jan 08, 2025",
          "Feb 27, 2025",
          "Mar 13, 2025",
          "Mar 19, 2025",
          "Apr 09, 2025",
          "Apr 06, 2025",
          "Apr 19, 2025",
          "Jun 02, 2025",
        ],
        dates_recent,
      ),
      key,
    );
    return v5;
  });
  let parsed = list_adder(function (la) {
    each_object(filtered2, function (date_string, messages) {
      let date = date_to(date_string);
      let day = date_string;
      la({
        day,
        date,
        messages,
      });
    });
  });
  list_sort_property(parsed, "date");
  return parsed;
}
