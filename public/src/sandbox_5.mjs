import { list_map_property } from "./list_map_property.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { fn_name } from "./fn_name.mjs";
import { command_line_exec } from "./command_line_exec.mjs";
import { folder_external_root_combine } from "./folder_external_root_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { each } from "./each.mjs";
import { object_values_to_list } from "./object_values_to_list.mjs";
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
import { string_replace } from "./string_replace.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { string_includes } from "./string_includes.mjs";
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
    let v4 = d < cutoff && string_includes(key, "2025");
    return v4;
  }
  function after_trip(key, value) {
    let d = date_to(key);
    let cutoff = new Date("2025-04-04");
    let v4 = d >= cutoff;
    return v4;
  }
  let count = 5;
  let parsed = list_adder(function (la) {
    each_object(merged, function (date_string, messages) {
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
  let recent = list_take_reverse(parsed, count);
  let dates_recent = list_map_property(recent, "day");
  let before = conversations_filter(merged, before_trip);
  let after = conversations_filter(merged, after_trip);
  let messages = list_random_item(before);
  messages = object_property_get(recent, "messages");
  let result = "";
  each(messages, function (item2) {
    let name_grace = "Grace";
    let name_jared = "Jared";
    let users = {
      ["Gra Cia"]: name_grace,
      ["Jared Mathis"]: name_jared,
      ["Ja Ma"]: name_jared,
    };
    let colors = {
      [name_grace]: "darkgreen",
      [name_jared]: "darkred",
    };
    let user = object_property_get(item2, "user");
    let message = object_property_get(item2, "message");
    let when2 = object_property_get(item2, "when");
    let user_mapped = object_property_get(users, user);
    result += string_combine_multiple([
      "<p>",
      '<span style="color: ',
      object_property_get(colors, user_mapped),
      '">',
      user_mapped,
      "</span>",
      '<span style="color: darkgray">',
      " @ ",
      when2,
      "</span>",
      "<br>",
      string_replace(message, "  ", "<br><br>"),
      "</p>",
      "\n\n",
    ]);
  });
  let output_folder = folder_external_root_combine("output");
  let output_path = path_join([
    output_folder,
    string_combine_multiple([fn_name("sandbox_5"), ".html"]),
  ]);
  await file_overwrite(output_path, result);
  await command_line_exec(output_path);
  function conversations_filter(merged, filter) {
    let filtered = object_filter(merged, filter);
    let filtered2 = object_filter(filtered, function (key, value) {
      let v5 = list_includes_not(
        list_combine(
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
          ],
          dates_recent,
        ),
        key,
      );
      return v5;
    });
    let parsed = object_values_to_list(filtered2);
    return parsed;
  }
}
