import { list_between } from "./list_between.mjs";
import { range_map_join_empty } from "./range_map_join_empty.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function grace_good_morning() {
  let crosses = "✝☦";
  let green = "💚";
  let hugs = "🫂🤗";
  let emojis = "💓♥️🤩💕💖💗💘💞🏩💝🫶🤟🏿💌💟🌷🌹❣️";
  let faces = "😊😍😘😗😙😁🙂😀😇😇😇";
  let colors = "❤️💙🧡🤍🤎🖤💚💛💜";
  let family = "👫🫂👩🏾‍❤‍💋‍👨🏾💍👰🤵💋💒🏡🛏🤰👼👶🤱👨‍🍼🍼👨‍👩‍👦👨‍👩‍👧‍👦😇";
  let count = 5;
  return list_between(
    [
      range_map_join_empty(count, () => {
        return list_random_item(crosses);
      }),
    ],
    "",
  );
}
