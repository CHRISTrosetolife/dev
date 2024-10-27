import { object_replace } from "./object_replace.mjs";
import { app_save_change } from "./app_save_change.mjs";
export async function app_save_change_bible(
  app_fn,
  book_code,
  chapter,
  verse_number,
) {
  await app_save_change(app_fn, (save) =>
    object_replace(save, {
      book: book_code,
      chapter,
      verse: verse_number,
    }),
  );
}
