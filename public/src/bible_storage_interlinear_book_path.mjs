import { path_join } from "./path_join.mjs";
export function bible_storage_interlinear_book_path(book_name) {
  return path_join(["interlinear", book_name]);
}
