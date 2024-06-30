import { log } from "./log.mjs";
export function html_recorder_media_stop(mr) {
  let { media_recorder } = mr;
  media_recorder.stop();
  log(media_recorder.state);
  log("recorder stopped");
}
