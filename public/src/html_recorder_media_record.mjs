import { log } from "./log.mjs";
export function html_recorder_media_record() {
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioContext = new AudioContext();
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
}
