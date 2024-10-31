import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { app_search_bible_folder } from "./app_search_bible_folder.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_share() {
  let body = html_style_default_initialize();
  let lookup = html_hash_lookup();
  let chapter = object_property_get(lookup, "c");
  let verse = object_property_get(lookup, "v");
  let bible_folder = app_search_bible_folder();
  let text = await firebase_download_bible_verse(bible_folder, chapter, verse);
}
