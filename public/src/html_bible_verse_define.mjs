import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { google_search_url } from "./google_search_url.mjs";
import { html_a_blank } from "./html_a_blank.mjs";
import { html_bible_verse } from "./html_bible_verse.mjs";
export function html_bible_verse_define(root, book_code, chapter, verse) {
  return html_bible_verse(root, book_code, chapter, verse, (root, token) =>
    html_a_blank(
      root,
      token,
      google_search_url(string_combine_multiple(["define: ", token])),
    ),
  );
}
