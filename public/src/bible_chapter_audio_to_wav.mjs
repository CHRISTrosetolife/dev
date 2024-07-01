import { assert_async } from "./assert_async.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { log } from "./log.mjs";
import { bible_chapter_audio_download } from "./bible_chapter_audio_download.mjs";
import { list_first } from "./list_first.mjs";
import ffmpeg from "fluent-ffmpeg";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
export async function bible_chapter_audio_to_wav(bible_folder, chapter_name) {
  let file_paths = await bible_chapter_audio_download(
    bible_folder,
    chapter_name,
  );
  let first = list_first(file_paths);
  let {
    path: { system: path_system },
  } = first;
  let path_input = path_system;
  let folder = path_dirname(path_input);
  let path_output = path_join([folder, "last.wav"]);
  await new Promise(async (resolve, reject) => {
    await assert_async(file_exists, [path_input]);
    ffmpeg(path_input)
      .toFormat("wav")
      .on("error", (err) => {
        log("An error occurred: " + err.message);
        reject(err);
      })
      .on("progress", (progress) => {
        log("Processing: " + progress.targetSize + " KB converted");
      })
      .on("end", () => {
        log("Processing finished !");
        resolve();
      })
      .save(path_output);
  });
}
