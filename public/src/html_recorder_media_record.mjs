import { log } from "./log.mjs";
export function html_recorder_media_record(mr) {
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioContext = new AudioContext();
  let { media_recorder } = mr;
  media_recorder.start();
  log(media_recorder.state);
  log("recorder started");
}
