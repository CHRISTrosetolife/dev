import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
import { list_first } from "./list_first.mjs";
export async function bible_chapter_audio_to_wav(bible_folder, chapter_name) {
  let file_names = await bible_chapter_audio_download(
    bible_folder,
    chapter_name,
  );
  let first = list_first(file_names);
}
