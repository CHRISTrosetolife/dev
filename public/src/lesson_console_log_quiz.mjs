import {subtract} from "./subtract.mjs";
import {list_slice} from "./list_slice.mjs";
import {add} from "./add.mjs";
import {integer_random} from "./integer_random.mjs";
import {list_length} from "./list_length.mjs";
import {string_split_space} from "./string_split_space.mjs";
export function lesson_console_log_quiz() {
    let sentence = 'for GOD so loved the world that HE gave HIS only SON that whoever believes in HIM shall not perish but have eternal life';
    let words = string_split_space(sentence);
    let word_count = integer_random(2, 4);
    let length = list_length(words);
    let high = subtract(length, word_count);
    let index = integer_random(0, high);
    let end = add(index, word_count);
    let sliced = list_slice(words, index, end);
    let message = list_join_space(sliced);
    return message;
}
