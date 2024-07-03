import { bible_chapter_folder_parent } from "./bible_chapter_folder_parent.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export function bible_chapter_folder_parent_gitignore(
  folder_parent,
  bible_folder,
  chapter_name,
) {
  return folder_gitignore_path(
    bible_chapter_folder_parent(folder_parent, bible_folder, chapter_name),
  );
}
