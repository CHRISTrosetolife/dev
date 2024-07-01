import { each_async } from "./each_async.mjs";
import { audio_to_wav } from "./audio_to_wav.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_audio_to_wav(bible_folder, chapter_name) {
  let file_paths = await bible_chapter_audio_download(
    bible_folder,
    chapter_name,
  );
  await each_async(file_paths, async (file_path) => {
    let {
      path: { system: path_system },
    } = file_path;
    let path_input = path_system;
    let folder = path_dirname(path_input);
    let path_output = path_join([folder, "last.wav"]);
    await audio_to_wav(path_input, path_output);
  });
}
