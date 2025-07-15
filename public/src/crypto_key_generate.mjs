import { buffer_to } from "./buffer_to.mjs";
import { object_snake_to } from "./object_snake_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
import {
  generateKeyPairSync,
  publicEncrypt,
  privateDecrypt,
} from "node:crypto";
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
  let public_key = object_property_get(result, "public_key");
  let private_key = object_property_get(result, "private_key");
  let message = "Hello, secure world!";
  let encrypted = publicEncrypt(public_key, buffer_to(message));
  console.log("🔐 Encrypted (base64):", encrypted.toString("base64"));
  let decrypted = privateDecrypt(private_key, encrypted);
  console.log("🔓 Decrypted:", decrypted.toString());
}
