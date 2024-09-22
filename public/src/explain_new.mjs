import { explain_folder } from "./explain_folder.mjs";
import { written_new } from "./written_new.mjs";
export async function explain_new(name) {
  let written_folder = explain_folder();
  await written_new(written_folder, name);
}
