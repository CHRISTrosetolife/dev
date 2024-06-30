import { log } from "./log.mjs";
export async function html_recorder_media() {
  let port = await connect();
  await register(port);
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    log("getUserMedia supported.");
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(function (stream) {
        let mediaRecorder = new MediaRecorder(stream, {
          mimeType: "audio/wav",
        });
      });
  } else {
    log("getUserMedia not supported on your browser!");
  }
}
