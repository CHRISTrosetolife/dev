import { html_hr } from "./html_hr.mjs";
import { html_bible_verse_navigation } from "./html_bible_verse_navigation.mjs";
import { app_bible_verse } from "./app_bible_verse.mjs";
import { app_record_verse_generic } from "./app_record_verse_generic.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_bible_verse_common(
  context,
  book_code,
  chapter,
  verse_number,
) {
  let app_lambda = object_property_get(context, "app_lambda");
  let { middle: m } = await app_record_verse_generic(
    app_lambda,
    book_code,
    chapter,
    verse_number,
    context,
    app_bible_verse,
  );
  let middle = m;
  await html_bible_verse_navigation(
    app_lambda,
    app_bible_verse,
    context,
    book_code,
    chapter,
    verse_number,
    "reading",
    false,
    middle,
  );
  html_hr(middle);
  return middle;
}
