import { list_denest } from "./list_denest.mjs";
import { html_p_text_multiple } from "./html_p_text_multiple.mjs";
export function html_prayer(root, prayer) {
  html_p_text_multiple(
    root,
    list_denest([
      [
        "Heavenly Father,",
        "In the name of Jesus:",
        "Have mercy on me, a sinner;",
      ],
      prayer,
      "Amen",
    ]),
  );
}
