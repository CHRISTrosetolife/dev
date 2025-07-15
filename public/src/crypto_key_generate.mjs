import { log } from "./log.mjs";
export async function crypto_key_generate() {
  let keyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-256",
    },
    true,
    ["deriveKey", "deriveBits"],
  );
  console.log("Public Key:", keyPair.publicKey);
  console.log("Private Key:", keyPair.privateKey);
}
