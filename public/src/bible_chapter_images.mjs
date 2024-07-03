import { bible_verse_image } from "./bible_verse_image.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function bible_chapter_images(bible_folder, chapter_name) {
  assert_arguments_length(arguments, 2);
  let verses = await bible_chapter(bible_folder, chapter_name);
  return await list_map_async(verses, async (verse) => {
    let { verse_number } = verse;
    await bible_verse_image(bible_folder, chapter_name, verse_number);
  });
}
