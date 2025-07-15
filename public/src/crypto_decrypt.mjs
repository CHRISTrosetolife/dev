import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
import { privateDecrypt } from "node:crypto";
export function crypto_decrypt(private_key, encrypted) {
  let decoded = Buffer.from(encrypted, "base64");
  log({
    decoded,
    encrypted,
  });
  let decrypted = privateDecrypt(private_key, decoded);
  log(string_combine_multiple(["🔓 Decrypted:", decrypted.toString()]));
  let v = decrypted;
  return v;
}
