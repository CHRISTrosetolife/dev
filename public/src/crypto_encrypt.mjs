import { string_base64_to } from "./string_base64_to.mjs";
import { buffer_to } from "./buffer_to.mjs";
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
    let encryptedBase64 = string_base64_to(
      String.fromCharCode(...new Uint8Array(encrypted)),
    );
    return encryptedBase64;
  }
  let { publicEncrypt } = await import("node:crypto");
  let encrypted = publicEncrypt(public_key_pem, buffer_to(message));
  let v = string_base64_to(encrypted);
  return v;
}
