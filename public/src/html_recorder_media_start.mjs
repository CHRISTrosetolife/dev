import { log } from "./log.mjs";
export function html_recorder_media_start(mr) {
  mr.media_recorder.start();
  log(mr.media_recorder.state);
  log("recorder started");
}
