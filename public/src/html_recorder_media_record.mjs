import { html_recorder_media_start } from "./html_recorder_media_start.mjs";
export function html_recorder_media_record(mr) {
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let audioContext = new AudioContext();
  html_recorder_media_start(mr);
}
