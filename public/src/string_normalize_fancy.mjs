export function string_normalize_fancy(str) {
  let result = "";
  for (let char of str) {
    let code = char.codePointAt(0);
    if (code >= 0x1d5a0 && code <= 0x1d5b9) {
      result += String.fromCodePoint(code - 0x1d5a0 + 65);
    } else if (code >= 0x1d5ba && code <= 0x1d5d3) {
      result += String.fromCodePoint(code - 0x1d5ba + 97);
    } else if (code >= 0x1d63c && code <= 0x1d655) {
      result += String.fromCodePoint(code - 0x1d63c + 65);
    } else if (code >= 0x1d656 && code <= 0x1d66f) {
      result += String.fromCodePoint(code - 0x1d656 + 97);
    } else {
      result += char;
    }
  }
  return result;
}
