import { list_find_verse_number } from "./list_find_verse_number.mjs";
export function bible_verses_to_verse_tokens(verses_interlinear, verse_number) {
  let verse_interlinear = list_find_verse_number(
    verses_interlinear,
    verse_number,
  );
  let { tokens: t } = verse_interlinear;
  let tokens = t;
  return tokens;
}
