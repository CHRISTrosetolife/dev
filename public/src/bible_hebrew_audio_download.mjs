import { bible_audio_download_generic } from "./bible_audio_download_generic.mjs";
import { html_parse_a_href_starts_with_hrefs } from "./html_parse_a_href_starts_with_hrefs.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function bible_hebrew_audio_download() {
  let prefix_url = "https://mechon-mamre.org/";
  let url = string_combine_multiple([prefix_url, "p/pt/pt00.htm"]);
  let prefix = "../../";
  return await bible_audio_download_generic(
    url,
    bible_audio_download_hrefs_get,
    bible_audio_download_hrefs_map,
  );
  function bible_audio_download_hrefs_get(root) {
    return html_parse_a_href_starts_with_hrefs(
      root,
      string_combine_multiple([prefix, "mp3/"]),
    );
  }
  function bible_audio_download_hrefs_map(href) {
    return string_combine(prefix_url, string_prefix_without(href, prefix));
  }
}
