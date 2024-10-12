import { list_size_randoms } from "./list_size_randoms.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_between } from "./list_between.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_map } from "./list_map.mjs";
export function grace_good_morning() {
  let crosses = "✝☦";
  let green = "💚";
  let hugs = "🫂🤗";
  let emojis = "💓♥️🤩💕💖💗💘💞🏩💝🫶🤟🏿💌💟🌷🌹❣️";
  let faces = "😊😍😘😗😙😁🙂😀😇😇😇";
  let colors = "❤️💙🧡🤍🤎🖤💚💛💜";
  let family = "👫🫂👩🏾‍❤‍💋‍👨🏾💍👰🤵💋💒🏡🛏🤰👼👶🤱👨‍🍼🍼👨‍👩‍👦👨‍👩‍👧‍👦😇";
  let count = 5;
  let counts = [3, 5, 7];
  return list_join_newline(
    list_between(
      [
        list_join_empty(
          list_map([crosses, green, hugs], (items) =>
            list_size_randoms(counts, items),
          ),
        ),
        "Good morning love 😇",
        "I love you 💚",
      ],
      "",
    ),
  );
}
