import { html_event_listener_add } from "./html_event_listener_add.mjs";
import { html_event_listener_remove } from "./html_event_listener_remove.mjs";
import { html_wav_to_mp3 } from "./html_wav_to_mp3.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
export async function html_recorder_media_stop(mr) {
  let { media_recorder, chunks } = mr;
  let type = "stop";
  let v = await new Promise(function (resolve) {
    html_event_listener_add(media_recorder, type, async function on_stop() {
      html_event_listener_remove(media_recorder, type, on_stop);
      let blob = new Blob(chunks, {
        type: chunks[0].type,
      });
      let blob_mp3 = await html_wav_to_mp3(blob);
      list_remove_all(chunks);
      resolve(blob_mp3);
    });
    media_recorder.stop();
  });
  return v;
}
