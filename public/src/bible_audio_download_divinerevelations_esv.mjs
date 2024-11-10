import { bible_audio_download_generic } from "./bible_audio_download_generic.mjs";
import { html_parse_a_href_ends_with_hrefs } from "./html_parse_a_href_ends_with_hrefs.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_combine } from "./string_combine.mjs";
export async function bible_audio_download_divinerevelations_esv() {
  let prefix_url =
    "https://www.divinerevelations.info/documents/bible/english_mp3_bible/";
  let url = string_combine_multiple([
    prefix_url,
    "english_standard_version_v2",
    "/",
  ]);
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
