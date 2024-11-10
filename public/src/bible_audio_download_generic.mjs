import { log } from "./log.mjs";
import { http_file } from "./http_file.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_map } from "./list_map.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function bible_audio_download_generic(
  url,
  bible_audio_download_hrefs_get,
  bible_audio_download_hrefs_map,
) {
  let p = await http_cache_parse_parsed(url);
  let { root } = p;
  let hrefs = bible_audio_download_hrefs_get(root);
  log({
    hrefs,
  });
  return;
  let urls = list_map(hrefs, (h) => bible_audio_download_hrefs_map(h));
  let locations = await list_map_async(urls, http_file);
  return locations;
}
