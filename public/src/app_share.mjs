import { object_property_get } from "./object_property_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_share() {
  let body = html_style_default_initialize();
  let lookup = html_hash_lookup();
  let verse2 = object_property_get(lookup, "verse");
  let text = await firebase_download_bible_verse(chapter, verse);
}
