import crypto from "crypto";
import { import_multi } from "./import_multi.mjs";
export async function uuid() {
  let crypto = await import_multi("crypto", "window.crypto");
  return crypto.randomUUID();
}
