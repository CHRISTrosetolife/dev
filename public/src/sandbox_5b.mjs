import { string_includes } from "./string_includes.mjs";
import { date_to } from "./date_to.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_filter } from "./list_filter.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
export async function sandbox_5b() {
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  let before = list_filter(parsed, before_trip);
  let messages = list_random_item(before);
  await facebook_data_messages_to_html_open(messages);
  function before_trip(item) {
    let day = object_property_get(item, "day");
    let d = date_to(day);
    let cutoff = new Date("2025-03-22");
    let v4 = d < cutoff && string_includes(day, "2025");
    return v4;
  }
}
