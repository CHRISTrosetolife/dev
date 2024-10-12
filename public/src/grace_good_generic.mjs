import { string_shuffle } from "./string_shuffle.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_size_randoms } from "./list_size_randoms.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_denest } from "./list_denest.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function grace_good_generic(text) {
  let crosses = ["✝", "☦"];
  let green = ["💚"];
  let hugs = ["🫂", "🤗"];
  let love = "💓♥️🤩💕💖💗💘💞🏩💝🫶🤟🏿💌💟🌷🌹❣️";
  let faces = "😊😍😘😗😙😁🙂😀😇😇😇";
  let colors = "❤️💙🧡🤍🤎🖤💚💛💜";
  let family = "👫🫂👩🏾‍❤‍💋‍👨🏾💍👰🤵💋💒🏡🛏🤰👼👶🤱👨‍🍼🍼👨‍👩‍👦👨‍👩‍👧‍👦😇";
  let counts = [3, 5, 7];
  return list_join_newline(
    list_denest([
      list_join_empty(
        list_map([crosses, green, hugs], (items) =>
          list_size_randoms(counts, items),
        ),
      ),
      "",
      string_combine_multiple(["Good ", text, " love 😇"]),
      "",
      list_map([love, faces, colors], string_shuffle),
      "",
      "I love you 💚",
      "",
      family,
      "",
      list_join_empty(
        list_map([hugs, green, crosses], (items) =>
          list_size_randoms(counts, items),
        ),
      ),
    ]),
  );
}
