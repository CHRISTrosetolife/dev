import { app_bible_verse } from "./app_bible_verse.mjs";
import { html_style_a_plain } from "./html_style_a_plain.mjs";
import { firebase_initialize_axios } from "./firebase_initialize_axios.mjs";
export async function app_bible() {
  let root = await firebase_initialize_axios();
  html_style_a_plain();
  await app_bible_verse(
    {
      root,
    },
    book_code,
    chapter,
    verse_number,
  );
}
