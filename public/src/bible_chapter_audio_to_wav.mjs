import { object_merge } from "./object_merge.mjs";
import { each_async } from "./each_async.mjs";
import { audio_to_wav } from "./audio_to_wav.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_audio_to_wav(bible_folder, chapter_name) {
  let downloads = await bible_chapter_audio_download(
    bible_folder,
    chapter_name,
  );
  await each_async(downloads, async (download) => {
    let { path } = download;
    let { system: path_system } = path;
    let path_input = path_system;
    let folder = path_dirname(path_input);
    let path_output = path_join([folder, "last.wav"]);
    object_merge();
    await audio_to_wav(path_input, path_output);
  });
}
