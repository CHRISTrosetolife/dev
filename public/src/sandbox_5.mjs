import { list_join_space } from "./list_join_space.mjs";
import { list_take } from "./list_take.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { grace_facebook_data_messages_jared_parsed_cache } from "./grace_facebook_data_messages_jared_parsed_cache.mjs";
import { list_first } from "./list_first.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_filter } from "./list_filter.mjs";
import { identity } from "./identity.mjs";
export async function sandbox_5() {
  let threads = await grace_facebook_data_messages_jared_parsed_cache();
  let thread = list_first(threads);
  let messages = object_property_get(thread, "messages");
  messages = list_filter(messages, string_empty_not_is);
  let value_get = identity;
  each(messages, function (message) {
    let key = key_get(message);
  });
  function key_get(message) {
    let when = object_property_get(message, "when");
    let s = string_split_space(when);
    let s3 = list_take(s, 3);
    let s3j = list_join_space(s3);
    let v2 = s3j;
    return v2;
  }
  let v = messages;
  return v;
  each(threads, function (item) {});
  return threads;
}
