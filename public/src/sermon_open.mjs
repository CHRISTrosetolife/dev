import { written_open } from "./written_open.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
export async function sermon_open(name) {
  let written_folder = sermon_folder();
  await written_open(written_folder, name);
}
