import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { buffer_to } from "./buffer_to.mjs";
import { log } from "./log.mjs";
import { crypto_key_public_import } from "./crypto_key_public_import.mjs";
import { web_is } from "./web_is.mjs";
export async function crypto_encrypt(public_key_pem, message) {
  if (web_is()) {
    let key = await crypto_key_public_import(public_key_pem);
    let enc = new TextEncoder().encode(message);
    let encrypted = await crypto.subtle.encrypt(
      {
        name: "RSA-OAEP",
      },
      key,
      enc,
    );
    let encryptedBase64 = btoa(
      String.fromCharCode(...new Uint8Array(encrypted)),
    );
    log(string_combine_multiple(["🔐 Encrypted (base64):", encryptedBase64]));
    return encryptedBase64;
  }
  let { publicEncrypt } = await import("node:crypto");
  let encrypted = publicEncrypt(public_key_pem, buffer_to(message));
  log(
    string_combine_multiple([
      "🔐 Encrypted (base64):",
      encrypted.toString("base64"),
    ]),
  );
  return encrypted;
}
