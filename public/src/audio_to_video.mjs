import { log } from "./log.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import videoshow from "videoshow";
import { getAudioDurationInSeconds } from "get-audio-duration";
export async function audio_to_video(path_audio, image_path, path_output) {
  log({
    path_audio,
    image_path,
    path_output,
  });
  await folder_parent_exists_ensure(path_output);
  let audio_duration = await getAudioDurationInSeconds(path_audio);
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
