
import {
  publicEncrypt,
  privateDecrypt,
} from "node:crypto";export function crypto_key_test() {
  let public_key = object_property_get(result, "public_key");
  let private_key = object_property_get(result, "private_key");
  let message = "Hello, secure world!";
  let encrypted = publicEncrypt(public_key, buffer_to(message));
  log("🔐 Encrypted (base64):", encrypted.toString("base64"));
  let decrypted = privateDecrypt(private_key, encrypted);
  log("🔓 Decrypted:", decrypted.toString());}
