export function string_base64_from(input) {
  let v = Buffer.from(input).toString("ascii");
  return v;
}
