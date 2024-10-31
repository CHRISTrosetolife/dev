import { firebase_download_bible_verse_search } from "./firebase_download_bible_verse_search.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_share() {
  let body = html_style_default_initialize();
  let lookup = html_hash_lookup();
  let chapter = object_property_get(lookup, "c");
  let verse = object_property_get(lookup, "v");
  let text = await firebase_download_bible_verse_search(chapter, verse);
}
