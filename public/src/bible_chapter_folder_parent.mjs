import { path_join } from "./path_join.mjs";
import { list_add } from "./list_add.mjs";
import { bible_chapter_folder } from "./bible_chapter_folder.mjs";
export function bible_chapter_folder_parent(
  folder_parent,
  chapter_name,
  folder_name,
) {
  let paths = [folder_parent];
  let p = bible_chapter_folder(chapter_name, folder_name);
  list_add(paths, p);
  let r = path_join(paths);
  return r;
}
