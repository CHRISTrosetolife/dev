import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { list_first } from "./list_first.mjs";
export async function sandbox_5() {
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  let day_first = list_first(parsed);
  let messages2 = object_property_get(day_first, "messages");
  log({
    parsed,
  });
  await facebook_data_messages_to_html_open(messages);
}
