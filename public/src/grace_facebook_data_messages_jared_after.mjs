import { date_to } from "./date_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_filter } from "./list_filter.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
export async function grace_facebook_data_messages_jared_after() {
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  let after = list_filter(parsed, after_trip);
  let messages = list_random_item(after);
  await facebook_data_messages_to_html_open(messages);
  function after_trip(item) {
    let day = object_property_get(item, "day");
    let d = date_to(day);
    let cutoff = new Date("2025-04-04");
    let v4 = d >= cutoff;
    return v4;
  }
}
