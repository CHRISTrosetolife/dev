import { grace_facebook_data_messages_jared } from "./grace_facebook_data_messages_jared.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
export async function sandbox_5() {
  let folders = [
    "your_activity_off_meta_technologies",
    "preferences",
    "comments_and_reactions",
    "dating",
    "facebook_gaming",
    "facebook_marketplace",
    "events",
    "facebook_payments",
    "fundraisers",
    "facebook_support",
    "groups",
  ];
  let folders_in = ["messages"];
  let mapped = list_map(folders_in, function (f) {
    let v5 = string_combine_multiple(["\\", f, "\\"]);
    return v5;
  });
  let v4 = await grace_facebook_data_messages_jared();
  return v4;
}
