import { string_combine } from "./string_combine.mjs";
import { html_parse_a_href_ends_with_hrefs } from "./html_parse_a_href_ends_with_hrefs.mjs";
import { bible_audio_download_generic } from "./bible_audio_download_generic.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_audio_download_mp3(prefix_url, version) {
  let url = string_combine_multiple([prefix_url, version, "/"]);
  return await bible_audio_download_generic(
    url,
    bible_audio_download_hrefs_get,
    bible_audio_download_hrefs_map,
  );
  function bible_audio_download_hrefs_get(root) {
    return html_parse_a_href_ends_with_hrefs(root, ".mp3");
  }
  function bible_audio_download_hrefs_map(href) {
    return string_combine(url, href);
  }
}
