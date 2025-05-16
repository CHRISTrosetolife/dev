import { http_buffer } from "./http_buffer.mjs";
import iconv from "iconv-lite";
export async function http_iso_8859_1(url) {
  let b = await http_buffer(url);
  let html = iconv.decode(b, "ISO-8859-1");
  return html;
}
