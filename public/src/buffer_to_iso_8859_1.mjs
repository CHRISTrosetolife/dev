export function buffer_to_iso_8859_1(b) {
  return iconv.decode(b, "ISO-8859-1");
}
