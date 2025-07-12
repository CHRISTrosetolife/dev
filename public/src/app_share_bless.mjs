import { emojis_trinity } from "./emojis_trinity.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function app_share_bless() {
  return string_combine_multiple([
    "🙏 God bless you, your family, your friends and your country exceedingly and abundantly, more than anyone can ask or think in the name of the Father and of the Son and of the Holy Spirit amen ",
    emojis_trinity(),
  ]);
}
