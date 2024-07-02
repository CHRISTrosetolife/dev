import { bible_chapter_audio_download_prefix } from "./bible_chapter_audio_download_prefix.mjs";
import { storage_file_download_path } from "./storage_file_download_path.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { storage_files } from "./storage_files.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { list_last } from "./list_last.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function bible_chapter_audio_download(
  project_name,
  bible_folder,
  chapter_name,
) {
  let prefix = bible_chapter_audio_download_prefix(project_name, chapter_name);
  let files = await storage_files(prefix);
  let verses = await bible_chapter(bible_folder, chapter_name);
  let verse_numbers = list_map_property(verses, "verse_number");
  let verse_paths = list_map(verse_numbers, (vn) =>
    path_join([prefix, vn, "/"]),
  );
  return await list_adder_async(async (la) => {
    await each_async(verse_paths, async (verse_path) => {
      let file_verses = list_filter(files, (file) =>
        string_starts_with(file.name, verse_path),
      );
      sw;
      let last = list_last(file_verses);
      await storage_file_download(last);
      la({
        path: {
          firebase: last.name,
          system: storage_file_download_path(last),
        },
      });
    });
  });
}
