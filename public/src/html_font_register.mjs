import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_font_register() {
  let style = document.createElement("style");
  style.type = "text/css";
  let fontFaceRule = string_combine_multiple([
    "\n      @font-face {\n        font-family: '",
    fontName,
    "';\n        src: url('",
    fontPath,
    ".woff2') format('woff2'),\n             url('",
    fontPath,
    ".woff') format('woff');\n        font-weight: normal;\n        font-style: normal;\n      }\n    ",
  ]);
  style.innerHTML = fontFaceRule;
  document.head.appendChild(style);
}
