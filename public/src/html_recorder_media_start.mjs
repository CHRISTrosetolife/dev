import { log } from "./log.mjs";
export function html_recorder_media_start(mr) {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
}
