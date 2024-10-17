import { file_write } from "./file_write.mjs";
import { log } from "./log.mjs";
export async function kenny() {
  log({});
  await file_write();
}
