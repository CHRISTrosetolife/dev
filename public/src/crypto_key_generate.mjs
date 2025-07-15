import { generateKeyPairSync } from "node:crypto";
export async function crypto_key_generate() {
  let k = generateKeyPairSync("ec", {
    namedCurve: "prime256v1",
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
  let v = k;
  return v;
}
