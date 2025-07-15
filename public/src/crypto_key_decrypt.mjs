import { crypto_decrypt } from "./crypto_decrypt.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { crypto_key } from "./crypto_key.mjs";
export async function crypto_key_decrypt(encrypted) {
  let key = await crypto_key();
  let private_key = object_property_get(key, "private_key");
  let d = crypto_decrypt(private_key, encrypted);
  return d;
}
