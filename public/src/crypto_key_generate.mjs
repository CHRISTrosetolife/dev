import { object_snake_to } from "./object_snake_to.mjs";
import { generateKeyPairSync } from "node:crypto";
export async function crypto_key_generate() {
  let k = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
  });
  let result = object_snake_to(k);
  return result;
}
