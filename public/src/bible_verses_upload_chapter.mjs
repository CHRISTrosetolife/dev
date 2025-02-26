import { list_wait } from "./list_wait.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { list_map } from "./list_map.mjs";
import { bible_verses_upload_path } from "./bible_verses_upload_path.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { log } from "./log.mjs";
export async function bible_verses_upload_chapter(bible_folder, chapter) {
  log({
    chapter,
  });
  if (bible_folder === "hausa" && chapter === "DAN14") {
    return;
  }
  let verses = await bible_chapter(bible_folder, chapter);
  ("seems to be a race condition; code errors when multiple threads create folder; therefore create folder outside of loop");
  await folder_parent_exists_ensure(
    folder_gitignore_path(bible_verses_upload_path(bible_folder, chapter, "1")),
  );
  let mapped = list_map(verses, async function (verse) {
    let { verse_number, tokens } = verse;
    let storage_path = bible_verses_upload_path(
      bible_folder,
      chapter,
      verse_number,
    );
    await storage_upload_object(storage_path, {
      tokens,
    });
  });
  await list_wait(mapped);
}
