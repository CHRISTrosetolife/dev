import { firebase_download_bible_verse } from "./firebase_download_bible_verse.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export async function app_share() {
  let body = html_style_default_initialize();
  let text = await firebase_download_bible_verse(chapter, verse);
}
