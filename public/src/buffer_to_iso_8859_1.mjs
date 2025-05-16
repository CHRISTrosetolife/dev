import iconv from "iconv-lite";
export function buffer_to_iso_8859_1(b) {
  let v = iconv.decode(b, "ISO-8859-1");
  return v;
}
