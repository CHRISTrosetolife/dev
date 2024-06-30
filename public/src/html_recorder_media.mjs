import { error } from "./error.mjs";
import {
  MediaRecorder,
  register,
} from "https://jspm.dev/extendable-media-recorder";
import { connect } from "https://jspm.dev/extendable-media-recorder-wav-encoder";
export async function html_recorder_media() {
  let port = await connect();
  await register(port);
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    error("getUserMedia not supported on your browser!");
  }
  let stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });
  let media_recorder = new MediaRecorder(stream, {
    mimeType: "audio/wav",
  });
  let result = {
    media_recorder,
    chunks: [],
  };
  media_recorder.ondataavailable = function (e) {
    result.chunks.push(e.data);
  };
  return result;
}
