import breezystacklamejs from "https://cdn.jsdelivr.net/npm/@breezystack/lamejs@1.2.7/+esm";
export function html_wav_to_mp3() {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = function () {
      let arrayBuffer = this.result;
      let wavDecoder = breezystacklamejs.WavHeader.readHeader(
        new DataView(arrayBuffer),
      );
      let wavSamples = new Int16Array(
        arrayBuffer,
        wavDecoder.dataOffset,
        wavDecoder.dataLen / 2,
      );
      let mp3Encoder = new breezystacklamejs.Mp3Encoder(
        wavDecoder.channels,
        wavDecoder.sampleRate,
        128,
      );
      let mp3Buffer = mp3Encoder.encodeBuffer(wavSamples);
      let mp3Data = mp3Encoder.flush();
      let mp3BufferWithHeader = new Uint8Array(
        mp3Buffer.length + mp3Data.length,
      );
      mp3BufferWithHeader.set(mp3Buffer, 0);
      mp3BufferWithHeader.set(mp3Data, mp3Buffer.length);
      let mp3Blob = new Blob([mp3BufferWithHeader], {
        type: "audio/mp3",
      });
      resolve(mp3Blob);
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsArrayBuffer(wavBlob);
  });
}
