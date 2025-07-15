import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { log } from "./log.mjs";
export function cryto_decrypt(private_key, encrypted) {
  let decrypted = privateDecrypt(private_key, encrypted);
  log(string_combine_multiple(["🔓 Decrypted:", decrypted.toString()]));
}
