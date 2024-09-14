import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_map } from "./list_map.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { string_starts_with_curry } from "./string_starts_with_curry.mjs";
import { html_cache_parse_hrefs } from "./html_cache_parse_hrefs.mjs";
import { bible_ebible_url_combine } from "./bible_ebible_url_combine.mjs";
export async function bible_versions_list_english() {
  let url = bible_ebible_url_combine("download.php");
  let prefix = "details.php?id=";
  let hrefs = await html_cache_parse_hrefs(
    url,
    string_starts_with_curry(string_combine_multiple([prefix, "eng"])),
  );
  let u = list_unique(hrefs);
  let m = list_map(u, (s) => string_prefix_without(s, prefix));
  return u;
}
