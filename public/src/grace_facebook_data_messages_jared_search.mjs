import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_any } from "./list_any.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
export async function grace_facebook_data_messages_jared_search(search_term) {
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  list_reverse(parsed);
  let list = list_adder(function (la) {
    each(parsed, function (day) {
      let messages = object_property_get(day, "messages");
      let mapped = list_map_property(messages, "message");
      let match = list_any(mapped, function (m) {
        let v = string_includes(m, search_term);
        return v;
      });
      if (match) {
        la(messages);
      }
    });
  });
  let messages = list_concat_multiple(list);
  await facebook_data_messages_to_html_open(messages);
}
