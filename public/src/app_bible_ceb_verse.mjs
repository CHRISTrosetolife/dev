import { app_bible_verse_common } from "./app_bible_verse_common.mjs";
export async function app_bible_ceb_verse() {
  let middle = await app_bible_verse_common(
    context,
    book_code,
    chapter,
    verse_number,
  );
}
