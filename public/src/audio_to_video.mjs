import { import_node } from "./import_node.mjs";
import { log } from "./log.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { assert_async } from "./assert_async.mjs";
import { file_exists } from "./file_exists.mjs";
export async function audio_to_video(path_audio, image_path, path_output) {
  let videoshow = await import_node("videoshow");
  let { getAudioDurationInSeconds } = await import_node("get-audio-duration");
  log({
    path_audio,
    image_path,
    path_output,
  });
  await assert_async(file_exists, [image_path]);
  await folder_parent_exists_ensure(path_output);
  let audio_duration = await getAudioDurationInSeconds(path_audio);
  log({
    audio_duration,
  });
  await new Promise((resolve, reject) => {
    videoshow([image_path], {
      disableFadeOut: true,
      loop: audio_duration,
    })
      .audio(path_audio, {
        fade: false,
      })
      .save(path_output)
      .on("error", function (e) {
        reject(e);
      })
      .on("end", function () {
        resolve();
      });
  });
}
