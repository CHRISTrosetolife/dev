import { playAudioFile } from "audic";
export async function beep() {
  return await playAudioFile("./beep.wav");
}
