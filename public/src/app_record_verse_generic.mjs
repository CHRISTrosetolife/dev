import { google_search_url } from "./google_search_url.mjs";
import { html_a_blank } from "./html_a_blank.mjs";
import { html_button_copy } from "./html_button_copy.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_reference_name } from "./bible_reference_name.mjs";
import { html_bible_verse_navigation } from "./html_bible_verse_navigation.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_green } from "./html_style_green.mjs";
import { equal } from "./equal.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_bible_verse } from "./html_bible_verse.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { app_verses_generic } from "./app_verses_generic.mjs";
import { app_record_verse_buttons } from "./app_record_verse_buttons.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { app_save_change_bible } from "./app_save_change_bible.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function app_record_verse_generic(
  app_lambda,
  book_code,
  chapter,
  verse_number,
  context,
  app_verse_lambda,
) {
  await app_save_change_bible(app_lambda, book_code, chapter, verse_number);
  let root = object_property_get(context, "root");
  app_record_verse_buttons(context, book_code, chapter, app_verse_lambda);
  let verses = await app_verses_generic(
    context,
    app_lambda,
    book_code,
    chapter,
  );
  let verse = list_find_property(verses, "verse_number", verse_number);
  let { tokens } = verse;
  let r = bible_reference_name(book_code, chapter, verse_number);
  html_button_copy(
    root,
    string_combine_multiple([r, " ", list_join_space(tokens)]),
  );
  let vn = html_bible_verse(root, book_code, chapter, verse, (root, token) =>
    html_a_blank(
      root,
      token,
      google_search_url(string_combine_multiple(["define: ", token])),
    ),
  );
  html_hr(root);
  if (equal(verse_number, "1")) {
    html_style_green(vn);
  }
  let middle = html_div(root);
  let navigation = await html_bible_verse_navigation(
    app_lambda,
    app_verse_lambda,
    context,
    book_code,
    chapter,
    verse_number,
    "reading",
    false,
    root,
  );
  (" and recording audio for audio Bible");
  return {
    middle,
    navigation,
  };
}
