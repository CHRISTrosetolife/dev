import { constants, privateDecrypt } from "node:crypto";
import { string_is } from "./string_is.mjs";
export function crypto_decrypt(private_key, buffer) {
  if (string_is(buffer)) {
    buffer = Buffer.from(buffer, "base64");
  }
  let decrypted = privateDecrypt(
    {
      key: private_key,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    buffer,
  );
  let v = decrypted;
  return v;
}
