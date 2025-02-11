import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { bible_verses_to_verse_tokens } from "./bible_verses_to_verse_tokens.mjs";
export function bible_verses_to_verse_tokens_each(
  verses_interlinear,
  verse_number,
  middle,
  lambda_each,
) {
  let tokens = bible_verses_to_verse_tokens(verses_interlinear, verse_number);
  each(tokens, (token) => {
    let row = html_div(middle);
    lambda_each(token, row);
  });
}
