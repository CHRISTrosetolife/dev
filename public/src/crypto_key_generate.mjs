import { object_property_set_strict } from "./object_property_set_strict.mjs";
import { object_property_get } from "./object_property_get.mjs";
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
  let result = {};
  let ps = object_properties(k);
  each(ps, function (p) {
    let v = object_property_get(k, p);
    let p_snake = string_snake_to(p);
    object_property_set_strict(result, p_snake, v);
  });
  let public_key = object_property_get(result, "public_key");
  let private_key = object_property_get(result, "private_key");
  let message = "Hello, secure world!";
  let encrypted = publicEncrypt(public_key, buffer_to(message));
  log("🔐 Encrypted (base64):", encrypted.toString("base64"));
  let decrypted = privateDecrypt(private_key, encrypted);
  log("🔓 Decrypted:", decrypted.toString());
}
