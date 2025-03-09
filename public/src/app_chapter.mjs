import { object_property_get } from "./object_property_get.mjs";
import { app_share_chapter } from "./app_share_chapter.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { html_style_default_initialize_axios } from "./html_style_default_initialize_axios.mjs";
import { html_hash_lookup } from "./html_hash_lookup.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function app_chapter() {
  let root = await html_style_default_initialize_axios();
  let lookup = html_hash_lookup();
  if (object_property_exists_not(lookup, app_share_chapter())) {
    html_p_text("Needs chapter in URL");
    return;
  }
  let chapter = object_property_get(lookup, app_share_chapter());
}
