import * as prettier from "prettier";
export async function js_code_format(code) {
  return await prettier.format(code, {
    parser: "babel",
  });
}
