import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { grace_facebook_data_htmls_cache } from "./grace_facebook_data_htmls_cache.mjs";
import { list_any } from "./list_any.mjs";
export async function sandbox_5() {
  let folders = ["your_activity_off_meta_technologies"];
  let v = await grace_facebook_data_htmls_cache();
  let v2 = list_filter(folders, function (s) {
    let v3 = list_any(folders, function (f) {
      let v4 = string_includes(string_combine_multiple(["\\", f, "\\"]));
      return v4;
    });
    return v3;
  });
  return v2;
}
