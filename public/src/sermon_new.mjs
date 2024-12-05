import { sermons_list_generate } from "./sermons_list_generate.mjs";
import { written_new } from "./written_new.mjs";
import { sermon_folder } from "./sermon_folder.mjs";
export async function sermon_new(name) {
  let written_folder = sermon_folder();
  await written_new(written_folder, name);
  await sermons_list_generate();
}
