import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function html_prayer(root, prayer) {
  html_p_text_multiple(
    root,
    list_concat_multiple([
      [
        "Heavenly Father,",
        "In the name of Jesus:",
        "Have mercy on me, a sinner;",
      ],
      prayer,
      ["Amen"],
    ]),
  );
}
