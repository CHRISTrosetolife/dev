import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
export async function bible_chapter_audio_to_wav(bible_folder, chapter_name) {
  let file_names = await bible_chapter_audio_download(
    bible_folder,
    chapter_name,
  );
}
