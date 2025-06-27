import { log } from "./log.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
export async function sandbox_5() {
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  log({
    parsed,
  });
  await facebook_data_messages_to_html_open(messages);
}
