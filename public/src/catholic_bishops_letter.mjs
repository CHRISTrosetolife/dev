import { catholic_bishops_page } from "./catholic_bishops_page.mjs";
import { file_extension_html } from "./file_extension_html.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function catholic_bishops_letter(letter) {
  let url = string_combine_multiple([
    "https://www.catholic-hierarchy.org/bishop/la",
    letter,
    file_extension_html(),
  ]);
  let v = await catholic_bishops_page(url);
  return v;
}
