import { object_merge_list } from "./object_merge_list.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_property_string_empty_not_is } from "./list_filter_property_string_empty_not_is.mjs";
import { facebook_data_messages_date_get } from "./facebook_data_messages_date_get.mjs";
import { list_to_groups } from "./list_to_groups.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
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
  let v = merged;
  return v;
}
function groups_merge(mapped) {
    let merged = {};
    each(mapped, function (group) {
        object_merge_list(group, merged);
    });
    return merged;
}

