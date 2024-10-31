import { string_split_comma } from "./string_split_comma.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
import { each_async } from "./each_async.mjs";
import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_share() {
  let body = await firebase_initialize_axios();
  let lookup = html_hash_lookup();
  let chapter = object_property_get(lookup, "c");
  let verse = object_property_get(lookup, "v");
  let bible_folders_text = object_property_get(lookup, "f");
  let bible_folders = string_split_comma();
  await each_async(bible_folders, async (bible_folder) => {
    let text = await firebase_download_bible_verse(
      bible_folder,
      chapter,
      verse,
    );
    html_p_text(body, text);
  });
}
