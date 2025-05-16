import { buffer_to_iso_8859_1 } from "./buffer_to_iso_8859_1.mjs";
import { http_buffer } from "./http_buffer.mjs";
export async function http_iso_8859_1(url) {
  let b = await http_buffer(url);
  let html = buffer_to_iso_8859_1(b);
  return html;
}
