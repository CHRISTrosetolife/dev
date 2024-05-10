import { string_split_space } from "./string_split_space.mjs";
export function lesson_console_log_quiz_words() {
  let sentence =
    "for GOD so loved the world that HE gave HIS only SON that whoever believes in HIM shall not perish but have eternal life";
  let words = string_split_space(sentence);
  return words;
}
