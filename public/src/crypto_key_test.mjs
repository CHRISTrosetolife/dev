import { crypto_key } from "./crypto_key.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { buffer_to } from "./buffer_to.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { publicEncrypt, privateDecrypt } from "node:crypto";
export async function crypto_key_test() {
  let result = await crypto_key();
  let public_key = object_property_get(result, "public_key");
  let private_key = object_property_get(result, "private_key");
  log({
    public_key,
    private_key,
  });
  let message = "Hello, secure world!";
  let encrypted = publicEncrypt(public_key, buffer_to(message));
  log(
    string_combine_multiple([
      "🔐 Encrypted (base64):",
      encrypted.toString("base64"),
    ]),
  );
  let decrypted = privateDecrypt(private_key, encrypted);
  log(string_combine_multiple(["🔓 Decrypted:", decrypted.toString()]));
}
