import {lesson_console_log_analogy} from "./lesson_console_log_analogy.mjs";
import {list_add} from "./list_add.mjs";
import {array_new} from "./array_new.mjs";
import {list_1} from "./list_1.mjs";
import {object_new} from "./object_new.mjs";
import {lesson_console_log_intro} from "./lesson_console_log_intro.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {html_element} from "./html_element.mjs";
import {html_inner_set} from "./html_inner_set.mjs";
import {html_span_text} from "./html_span_text.mjs";
import { lesson_console_log_analogy_paper } from "./lesson_console_log_analogy_paper.mjs";
import { lesson_console_log_analogy_addition } from "./lesson_console_log_analogy_addition.mjs";
export function lesson_console_log() {
    let v1 = object_new();
    object_property_set(v1, 'description', 'outputting a string to the console');
    let v2 = array_new();
    list_add(v2, lesson_console_log_analogy_paper);
    list_add(v2, lesson_console_log_analogy_addition);
    object_property_set(v1, 'screens', v2);
    return v1;
}
