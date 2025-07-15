import { cryto_key_decrypt } from "./cryto_key_decrypt.mjs";
import { crypto_key } from "./crypto_key.mjs";
import { log } from "./log.mjs";
import { buffer_to } from "./buffer_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { publicEncrypt } from "node:crypto";
export async function crypto_key_test() {
  let key = await crypto_key();
  log({
    public_key,
    private_key,
  });
  let message = "Hello, secure world!";
  let public_key = object_property_get(key, "public_key");
  let encrypted = publicEncrypt(public_key, buffer_to(message));
  await cryto_key_decrypt(encrypted);
}
