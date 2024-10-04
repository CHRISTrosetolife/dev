import { log } from "./log.mjs";
import { http_file } from "./http_file.mjs";
import { each_async } from "./each_async.mjs";
import { list_map } from "./list_map.mjs";
import { html_parse_a_href_starts_with_hrefs } from "./html_parse_a_href_starts_with_hrefs.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { string_combine } from "./string_combine.mjs";
export async function sandbox_3() {
  let prefix_url = "https://mechon-mamre.org/p/pt/";
  let url = string_combine_multiple([prefix_url, "pt00.htm"]);
  let p = await http_cache_parse_parsed(url);
  let { root } = p;
  let hrefs = html_parse_a_href_starts_with_hrefs(root, "../../mp3/");
  let urls = list_map(hrefs, (h) => string_combine(prefix_url, h));
  await each_async(urls, async (url) => {
    let location = await http_file(url);
    log({
      location,
    });
  });
}
