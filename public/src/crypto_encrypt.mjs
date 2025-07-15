import { log } from "./log.mjs";
import { crypto_key_public_import } from "./crypto_key_public_import.mjs";
export async function crypto_encrypt(publicKeyPem, plaintext) {
  if (false) {
  }
  let key = await crypto_key_public_import(publicKeyPem);
  let enc = new TextEncoder().encode(plaintext);
  let encrypted = await crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    key,
    enc,
  );
  let encryptedBase64 = btoa(String.fromCharCode(...new Uint8Array(encrypted)));
  console.log("🔐 Encrypted (base64):", encryptedBase64);
  return encryptedBase64;
}
