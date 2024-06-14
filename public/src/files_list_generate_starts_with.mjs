import { folder_read } from "./folder_read.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
export async function files_list_generate_starts_with(
  input_path,
  file_extension,
  prefix,
  name,
) {
  let files = await folder_read(input_path, file_extension);
  await generate_list_generic(name);
}
