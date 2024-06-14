import { generate_list_generic } from "./generate_list_generic.mjs";
export async function files_list_generate_starts_with(
  input_path,
  prefix,
  name,
) {
  await generate_list_generic(name);
}
