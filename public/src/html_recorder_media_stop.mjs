import { html_wav_to_mp3 } from "./html_wav_to_mp3.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
import { log } from "./log.mjs";
export async function html_recorder_media_stop(mr) {
  let { media_recorder, chunks } = mr;
  media_recorder.stop();
  log(media_recorder.state);
  log("recorder stopped");
  let blob = new Blob(chunks, {
    type: chunks[0].type,
  });
  let blob_mp3 = await html_wav_to_mp3(blob);
  list_remove_all(chunks);
  return blob_mp3;
}
