import { string_snake_to } from "./string_snake_to.mjs";
import { each } from "./each.mjs";
import { buffer_to } from "./buffer_to.mjs";
import { log } from "./log.mjs";
import {
  generateKeyPairSync,
  publicEncrypt,
  privateDecrypt,
} from "node:crypto";
import { object_properties } from "./object_properties.mjs";
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
  let ps = object_properties(k);
  each(ps, function (p) {
    let p_snake = string_snake_to();
  });
  let message = "Hello, secure world!";
  let encrypted = publicEncrypt(publicKey, buffer_to(message));
  log("🔐 Encrypted (base64):", encrypted.toString("base64"));
  let decrypted = privateDecrypt(privateKey, encrypted);
  log("🔓 Decrypted:", decrypted.toString());
}
