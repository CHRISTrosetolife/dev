import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { prayers_heal_afflicted } from "./prayers_heal_afflicted.mjs";
export function prayers_heal_me() {
  return [
    "May all who have commanded me to take medicine command me to stop taking medicine",
    "No more risperidone",
    "If I have emotions, thoughts, memories, or sleep may they be healed",
    prayers_heal_afflicted(
      list_join_comma_space([
        "self-harm desires",
        "hallucinations",
        "delusions",
        "depression",
        "oppression",
        "coughing",
        "or poor vision",
      ]),
    ),
  ];
}
