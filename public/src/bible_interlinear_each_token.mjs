import { each } from "./each.mjs";
export function bible_interlinear_each_token(new_testament_books, lambda) {
  each(new_testament_books, (book) => {
    each(book.chapters, (chapter) => {
      each(chapter.verses, (verse) => {
        each(verse.tokens, (token) => {
          lambda(token);
        });
      });
    });
  });
}
