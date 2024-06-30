import { log } from "./log.mjs";
export function html_recorder_media_start(mr) {
  mr.mediaRecorder.start();
  log(mediaRecorder.state);
  log("recorder started");
}
