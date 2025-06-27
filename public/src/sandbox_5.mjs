import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_adder } from "./list_adder.mjs";
import { each } from "./each.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { grace_facebook_data_messages_jared_parsed_list } from "./grace_facebook_data_messages_jared_parsed_list.mjs";
import { facebook_data_messages_to_html_open } from "./facebook_data_messages_to_html_open.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_map } from "./list_map.mjs";
import { list_includes } from "./list_includes.mjs";
export async function sandbox_5() {
  let search_term = "wedding";
  let parsed = await grace_facebook_data_messages_jared_parsed_list();
  let list = list_adder(function (la) {
    each(parsed, function (day) {
      let messages = object_property_get(day, "messages");
      let mapped = list_map(messages, "message");
      let match = list_includes(mapped, function (m) {
        let v = string_includes(m, search_term);
        return v;
      });
      if (match) {
        la(messages);
      }
    });
  });
  let messages = list_concat_multiple(lis);
  await facebook_data_messages_to_html_open(messages);
}
