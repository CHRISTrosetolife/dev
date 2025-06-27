import { list_first } from "./list_first.mjs";
import { list_take_reverse } from "./list_take_reverse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
export async function grace_facebook_data_messages_jared_recent() {
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  let recents = list_take_reverse(parsed, 5);
  let recent = list_first(recents);
  let messages = object_property_get(recent, "messages");
  await facebook_data_messages_to_html_open(messages);
}
