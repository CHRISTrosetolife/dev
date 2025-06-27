import { string_replace } from "./string_replace.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
export function facebook_data_messages_to_html(messages) {
  let result = "";
  each(messages, function (item2) {
    let name_grace = "Grace";
    let name_jared = "Jared";
    let users = {
      ["Gra Cia"]: name_grace,
      ["Jared Mathis"]: name_jared,
      ["Ja Ma"]: name_jared,
    };
    let colors = {
      [name_grace]: "darkgreen",
      [name_jared]: "darkred",
    };
    let user = object_property_get(item2, "user");
    let message = object_property_get(item2, "message");
    let when2 = object_property_get(item2, "when");
    let user_mapped = object_property_get(users, user);
    result += string_combine_multiple([
      "<p>",
      '<span style="color: ',
      object_property_get(colors, user_mapped),
      '">',
      user_mapped,
      "</span>",
      '<span style="color: darkgray">',
      " @ ",
      when2,
      "</span>",
      "<br>",
      string_replace(message, "  ", "<br><br>"),
      "</p>",
      "\n\n",
    ]);
  });
  return result;
}
