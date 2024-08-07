import { path_dirname_async } from "./path_dirname_async.mjs";
import { bible_chapter_audio_to_wav_path } from "./bible_chapter_audio_to_wav_path.mjs";
import { object_merge } from "./object_merge.mjs";
import { each_async } from "./each_async.mjs";
import { audio_to_wav } from "./audio_to_wav.mjs";
import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_audio_to_wav(
  project_name,
  bible_folder,
  chapter_name,
) {
  let downloads = await bible_chapter_audio_download(
    project_name,
    bible_folder,
    chapter_name,
  );
  await each_async(downloads, async (download) => {
    let { path } = download;
    let { system: path_system } = path;
    let path_input = path_system;
    let folder = await path_dirname_async(path_input);
    let path_output = path_join([folder, bible_chapter_audio_to_wav_path()]);
    object_merge(path, {
      wav: path_output,
    });
    await audio_to_wav(path_input, path_output);
  });
  return downloads;
}
