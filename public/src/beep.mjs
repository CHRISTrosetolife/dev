import { playAudioFile } from "audic";
export async function beep() {
  await playAudioFile("./beep.wave");
}
