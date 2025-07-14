import { log } from "./log.mjs";
export function string_normalize_fancy(str) {
  let result = "";
  for (let char of str) {
    let code = char.codePointAt(0);
    if (code >= 0x1d5a0 && code <= 0x1d5b9) {
      result += String.fromCodePoint(code - 0x1d5a0 + 65);
    } else if (code >= 0x1d5ba && code <= 0x1d5d3) {
      result += String.fromCodePoint(code - 0x1d5ba + 97);
    } else {
      result += char;
    }
  }
  log(
    JSON.stringify(
      {
        str,
        result,
      },
      null,
      2,
    ),
  );
  return result;
}
