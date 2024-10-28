import { each } from "./each.mjs";
export function bible_interlinear_chapter_each_token(chapter, lambda) {
  each(chapter.verses, (verse) => {
    each(verse.tokens, (token) => {
      lambda(token);
    });
  });
}
