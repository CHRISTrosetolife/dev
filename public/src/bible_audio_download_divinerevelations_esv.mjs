import { list_map_async } from "./list_map_async.mjs";
import { list_map } from "./list_map.mjs";
import { http_file } from "./http_file.mjs";
import { html_parse_a_href_starts_with_hrefs } from "./html_parse_a_href_starts_with_hrefs.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function bible_audio_download_divinerevelations_esv() {
  let prefix_url =
    "https://www.divinerevelations.info/documents/bible/english_mp3_bible/";
  let url = string_combine_multiple([prefix_url, "p/pt/pt00.htm"]);
  let p = await http_cache_parse_parsed(url);
  let { root } = p;
  let prefix = "../../";
  let hrefs = html_parse_a_href_starts_with_hrefs(
    root,
    string_combine_multiple([prefix, "mp3/"]),
  );
  let urls = list_map(hrefs, (h) =>
    string_combine(prefix_url, string_prefix_without(h, prefix)),
  );
  let locations = await list_map_async(urls, http_file);
  return locations;
}
