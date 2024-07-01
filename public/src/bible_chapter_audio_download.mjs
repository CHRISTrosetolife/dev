import { storage_files } from "./storage_files.mjs";
import { storage_files_names } from "./storage_files_names.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
export async function bible_chapter_audio_download(bible_folder, chapter_name) {
  let folder_name = bible_folder;
  folder_name = "test";
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
  let prefix = path_join([
    folder_audio_bible(),
    folder_name,
    book_code,
    chapter_code,
    "/",
  ]);
  await storage_files_names(prefix);
  let verses = await bible_chapter(bible_folder, chapter_name);
  let verse_numbers = list_map_property(verses, "verse_number");
  let verse_paths = list_map(verse_numbers, (vn) =>
    path_join([prefix, vn, "/"]),
  );
  await each_async(verse_paths, async (verse_path) => {
    storage_files;
  });
}
