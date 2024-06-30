import { log } from "./log.mjs";
export function html_recorder_media_stop() {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
}
