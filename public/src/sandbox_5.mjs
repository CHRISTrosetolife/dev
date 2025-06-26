import { object_property_string_empty_not_is } from "./object_property_string_empty_not_is.mjs";
import { facebook_data_messages_date_get } from "./facebook_data_messages_date_get.mjs";
import { list_to_groups } from "./list_to_groups.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { grace_facebook_data_messages_jared_parsed_cache } from "./grace_facebook_data_messages_jared_parsed_cache.mjs";
import { list_first } from "./list_first.mjs";
import { list_filter } from "./list_filter.mjs";
export async function sandbox_5() {
  let threads = await grace_facebook_data_messages_jared_parsed_cache();
  let thread = list_first(threads);
  let messages = object_property_get(thread, "messages");
  let property_name = "message";
  messages = list_filter(messages, function (m) {
    let v2 = object_property_string_empty_not_is(m, property_name);
    return v2;
  });
  let result = list_to_groups(messages, facebook_data_messages_date_get);
  let v = result;
  return v;
  each(threads, function (item) {});
  return threads;
}
