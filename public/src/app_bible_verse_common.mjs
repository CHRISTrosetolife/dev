import { html_hr } from "./html_hr.mjs";
import { html_bible_verse_navigation } from "./html_bible_verse_navigation.mjs";
import { app_record_verse_generic } from "./app_record_verse_generic.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function app_bible_verse_common(
  context,
  book_code,
  chapter,
  verse_number,
  app_verse_lambda,
) {
  let app_lambda = object_property_get(context, "app_lambda");
  let { middle: m } = await app_record_verse_generic(
    app_lambda,
    book_code,
    chapter,
    verse_number,
    context,
    app_verse_lambda,
  );
  let middle = m;
  await html_bible_verse_navigation(
    app_lambda,
    app_verse_lambda,
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
