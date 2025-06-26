import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { grace_facebook_data_messages_jared_parsed_cache } from "./grace_facebook_data_messages_jared_parsed_cache.mjs";
import { list_first } from "./list_first.mjs";
export async function sandbox_5() {
  let threads = await grace_facebook_data_messages_jared_parsed_cache();
  let thread = list_first(threads);
  let messages = object_property_get(thread, "messages");
  each(messages, function (message) {});
  let v = messages;
  return v;
  each(threads, function (item) {});
  return threads;
}
