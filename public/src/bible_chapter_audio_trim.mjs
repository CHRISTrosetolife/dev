import { bible_chapter_audio_to_wav } from "./bible_chapter_audio_to_wav.mjs";
import { list_first } from "./list_first.mjs";
export async function bible_chapter_audio_trim(bible_folder, chapter_name) {
  let downloads = await bible_chapter_audio_to_wav(bible_folder, chapter_name);
  let first = list_first(downloads);
  return first;
}
