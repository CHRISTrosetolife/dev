import { html_a_blank } from "./html_a_blank.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { google_search_url } from "./google_search_url.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { each } from "./each.mjs";
import { html_bible_verse_number } from "./html_bible_verse_number.mjs";
export function html_bible_verse(root, book_code, chapter, verse, each_token) {
  let { tokens, verse_number } = verse;
  let vn = html_bible_verse_number(root, book_code, chapter, verse_number);
  each(tokens, (token) => {
    html_spacer(root);
    each_token(root, token);
    html_a_blank(
      root,
      token,
      google_search_url(string_combine_multiple(["define: ", token])),
    );
  });
  return vn;
}
