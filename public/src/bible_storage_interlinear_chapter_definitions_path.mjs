import { bible_storage_interlinear_book_path } from "./bible_storage_interlinear_book_path.mjs";
import { path_join } from "./path_join.mjs";
export function bible_storage_interlinear_chapter_definitions_path(
  book_name,
  chapter_name,
) {
  return path_join([
    bible_storage_interlinear_book_path(book_name),
    chapter_name,
  ]);
}
