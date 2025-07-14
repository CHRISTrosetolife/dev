import { generate_list_string_generated } from "./generate_list_string_generated.mjs";
export async function generate_list_fn(get, fn) {
  let list = await get();
  await generate_list_string_generated(fn, list);
  return list;
}
