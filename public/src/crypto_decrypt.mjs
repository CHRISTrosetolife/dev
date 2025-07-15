import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { privateDecrypt } from "node:crypto";
import { string_is } from "./string_is.mjs";
export function crypto_decrypt(private_key, buffer) {
  if (string_is(buffer)) {
    buffer = Buffer.from(buffer, "base64");
  }
  let decrypted = privateDecrypt(private_key, buffer);
  log(string_combine_multiple(["🔓 Decrypted:", decrypted.toString()]));
  let v = decrypted;
  return v;
}
