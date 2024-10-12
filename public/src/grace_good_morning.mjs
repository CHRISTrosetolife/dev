import { list_size_randoms } from "./list_size_randoms.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_between } from "./list_between.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
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
        list_join_empty([
          list_size_randoms(counts, crosses),
          list_size_randoms(counts, green),
          list_size_randoms(counts, hugs),
        ]),
        "Good morning love 😇",
        "I love you 💚",
      ],
      "",
    ),
  );
}
