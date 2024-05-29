import tone from "tonegenerator";
import Speaker from "speaker";
export function beep() {
  var tonedata = tone({
    freq: 440,
    lengthInSecs: 2.0,
    volume: 30,
    rate: 44100,
    shape: "triangle",
    Int16Array: true,
  });
}
