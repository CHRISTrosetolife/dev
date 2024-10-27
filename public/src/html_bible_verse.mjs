import { html_hr } from "./html_hr.mjs";
import { list_single } from "./list_single.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { google_search_url } from "./google_search_url.mjs";
import { html_a } from "./html_a.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { bible_search_symbols_map_single } from "./bible_search_symbols_map_single.mjs";
import { html_spacer } from "./html_spacer.mjs";
import { each } from "./each.mjs";
import { html_bible_verse_number } from "./html_bible_verse_number.mjs";
export function html_bible_verse(root, book_code, chapter, verse) {
  let { tokens, verse_number } = verse;
  let vn = html_bible_verse_number(root, book_code, chapter, verse_number);
  each(tokens, (token) => {
    html_spacer(root);
    let mapped = bible_search_symbols_map_single(token);
    if (list_empty_not_is(mapped)) {
      html_a(
        root,
        token,
        google_search_url(
          string_combine_multiple(["define: ", list_single(mapped)]),
        ),
      );
    }
  });
  html_hr(root);
  return vn;
}
