import { list_size_random } from "./list_size_random.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_between } from "./list_between.mjs";
export function grace_good_morning() {
  let crosses = "✝☦";
  let green = "💚";
  let hugs = "🫂🤗";
  let emojis = "💓♥️🤩💕💖💗💘💞🏩💝🫶🤟🏿💌💟🌷🌹❣️";
  let faces = "😊😍😘😗😙😁🙂😀😇😇😇";
  let colors = "❤️💙🧡🤍🤎🖤💚💛💜";
  let family = "👫🫂👩🏾‍❤‍💋‍👨🏾💍👰🤵💋💒🏡🛏🤰👼👶🤱👨‍🍼🍼👨‍👩‍👦👨‍👩‍👧‍👦😇";
  let count = 5;
  return list_join_newline(
    list_between(
      [
        list_size_random(count, crosses),
        "Good morning love 😇",
        "I love you 💚",
      ],
      "",
    ),
  );
}
