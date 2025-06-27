import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
export async function sandbox_5() {
  let search_term = "wedding";
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  list_adder(function (la) {
    each(list, function (item) {});
  });
  let day_first = list_first(parsed);
  let messages = object_property_get(day_first, "messages");
  let mapped = list_map(messages, "message");
  let combined = list_join_space(texts);
  let match = list_includes(mapped, function (m) {
    let v = string_includes(m, search_term);
    return v;
  });
  log({
    messages,
  });
  return;
  await facebook_data_messages_to_html_open(messages);
}
