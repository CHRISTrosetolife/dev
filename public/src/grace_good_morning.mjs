import { integer_random } from "./integer_random.mjs";
import { list_to } from "./list_to.mjs";
import { string_shuffle } from "./string_shuffle.mjs";
import { list_denest } from "./list_denest.mjs";
import { list_size_randoms } from "./list_size_randoms.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
export function grace_good_morning() {
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
      "Good morning love 😇",
      "",
      list_map([love, faces, colors], (items) => {
        let shuffled = string_shuffle(items);
        let list = list_to(shuffled);
        integer_random(7, list_size(list));
      }),
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
