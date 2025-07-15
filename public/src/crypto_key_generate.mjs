import { buffer_to } from "./buffer_to.mjs";
import { log } from "./log.mjs";
import {
  generateKeyPairSync,
  publicEncrypt,
  privateDecrypt,
} from "node:crypto";
export async function crypto_key_generate() {
  let { publicKey, privateKey } = generateKeyPairSync("rsa", {
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
  let message = "Hello, secure world!";
  let encrypted = publicEncrypt(publicKey, buffer_to(message));
  console.log("🔐 Encrypted (base64):", encrypted.toString("base64"));
  let decrypted = privateDecrypt(privateKey, encrypted);
  console.log("🔓 Decrypted:", decrypted.toString());
}
