import { log } from "./log.mjs";
export function html_recorder_media_start(mr) {
  let media_recorder = mr;
  mr.media_recorder.start();
  log(mr.media_recorder.state);
  log("recorder started");
}
