import { log } from "./log.mjs";
import { crypto_encrypt } from "./crypto_encrypt.mjs";
import { crypto_key_decrypt } from "./crypto_key_decrypt.mjs";
import { crypto_key } from "./crypto_key.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function crypto_key_test() {
  let key = await crypto_key();
  let message = "hi";
  let public_key = object_property_get(key, "public_key");
  let encrypted = await crypto_encrypt(public_key, message);
  let decrypted = await crypto_key_decrypt(encrypted);
  log({
    decrypted,
  });
}
