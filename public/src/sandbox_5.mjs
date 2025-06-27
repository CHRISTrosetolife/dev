import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
import { list_filter } from "./list_filter.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_take_reverse } from "./list_take_reverse.mjs";
import { date_to } from "./date_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_first } from "./list_first.mjs";
export async function sandbox_5() {
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  let before = list_filter(parsed, before_trip);
  let after = list_filter(parsed, after_trip);
  let recents = list_take_reverse(parsed, 5);
  let messages = list_random_item(before);
  let recent = list_first(recents);
  messages = object_property_get(recent, "messages");
  messages = list_random_item(after);
  await facebook_data_messages_to_html_open(messages);
  function before_trip(item) {
    let day = object_property_get(item, "day");
    let d = date_to(day);
    let cutoff = new Date("2025-03-22");
    let v4 = d < cutoff && string_includes(day, "2025");
    return v4;
  }
  function after_trip(item) {
    let day = object_property_get(item, "day");
    let d = date_to(day);
    let cutoff = new Date("2025-04-04");
    let v4 = d >= cutoff;
    return v4;
  }
}
