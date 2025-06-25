import { string_includes_multiple } from "./string_includes_multiple.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { grace_facebook_data_htmls_cache } from "./grace_facebook_data_htmls_cache.mjs";
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
  let v = await grace_facebook_data_htmls_cache();
  let mapped = list_map(folders_in, function (f) {
    let v5 = string_combine_multiple(["\\", f, "\\"]);
    return v5;
  });
  let v2 = list_filter(v, function (s) {
    let v3 =
      string_includes_multiple(s, mapped) &&
      string_includes_multiple(s, ["jesus"]);
    return v3;
  });
  return v2;
}
