import {list_join_newline} from "./list_join_newline.mjs";
import {app_learn_code_random_boolean_binary} from "./app_learn_code_random_boolean_binary.mjs";
import {html_style_alternate_code_li} from "./html_style_alternate_code_li.mjs";
import {list_join} from "./list_join.mjs";
import {app_learn_code_log_random_value} from "./app_learn_code_log_random_value.mjs";
import {html_img_limited_centered} from "./html_img_limited_centered.mjs";
import {js_code_statement_let_assign_multiple} from "./js_code_statement_let_assign_multiple.mjs";
import {list_sort} from "./list_sort.mjs";
import {app_learn_code_log_add_3} from "./app_learn_code_log_add_3.mjs";
import {app_learn_code_unique_multiple} from "./app_learn_code_unique_multiple.mjs";
import {call_multiple} from "./call_multiple.mjs";
import {app_learn_code_unique} from "./app_learn_code_unique.mjs";
import {app_learn_code_log_add} from "./app_learn_code_log_add.mjs";
import {integer_random_digit_single_positive} from "./integer_random_digit_single_positive.mjs";
import {html_style_alternate_bold} from "./html_style_alternate_bold.mjs";
import {js_code_statement_let_assign} from "./js_code_statement_let_assign.mjs";
import {equal_not} from "./equal_not.mjs";
import {app_learn_code_range_retry} from "./app_learn_code_range_retry.mjs";
import {string_delimit_if} from "./string_delimit_if.mjs";
import {string_is} from "./string_is.mjs";
import {string_to} from "./string_to.mjs";
import {js_code_statement_assign} from "./js_code_statement_assign.mjs";
import {app_learn_code_code} from "./app_learn_code_code.mjs";
import {html_style_alternate_monospace} from "./html_style_alternate_monospace.mjs";
import {lesson_statements_two_quiz} from "./lesson_statements_two_quiz.mjs";
import {app_learn_code_log} from "./app_learn_code_log.mjs";
import {lesson_variable_code_get} from "./lesson_variable_code_get.mjs";
import {app_learn_code_random_value} from "./app_learn_code_random_value.mjs";
import {app_learn_code_random_identifier} from "./app_learn_code_random_identifier.mjs";
import {string_case_upper} from "./string_case_upper.mjs";
import {html_li_text_monospace} from "./html_li_text_monospace.mjs";
import {html_li} from "./html_li.mjs";
import {html_li_text} from "./html_li_text.mjs";
import {app_learn_code_code_part_contrast} from "./app_learn_code_code_part_contrast.mjs";
import {html_p_text} from "./html_p_text.mjs";
import {identity} from "./identity.mjs";
import {keyboard_keys} from "./keyboard_keys.mjs";
import {html_style_monospace} from "./html_style_monospace.mjs";
import {html_p} from "./html_p.mjs";
import {html_style_alternate} from "./html_style_alternate.mjs";
import {lesson_add_quiz} from "./lesson_add_quiz.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {app_learn_code_unscramble} from "./app_learn_code_unscramble.mjs";
import {lesson_log_number_quiz} from "./lesson_log_number_quiz.mjs";
import {app_learn_code_quiz} from "./app_learn_code_quiz.mjs";
import {lesson_log_number_example} from "./lesson_log_number_example.mjs";
import {lesson_console_log_javascript} from "./lesson_console_log_javascript.mjs";
import {lesson_console_log_process_named} from "./lesson_console_log_process_named.mjs";
import {lesson_console_log_process_computer_program} from "./lesson_console_log_process_computer_program.mjs";
import {list_add} from "./list_add.mjs";
import {array_new} from "./array_new.mjs";
import {object_new} from "./object_new.mjs";
import {object_property_set} from "./object_property_set.mjs";
import {lesson_console_log_analogy_paper} from "./lesson_console_log_analogy_paper.mjs";
import {lesson_console_log_analogy_addition} from "./lesson_console_log_analogy_addition.mjs";
import {lesson_console_log_program_first} from "./lesson_console_log_program_first.mjs";
import {lesson_console_log_strings} from "./lesson_console_log_strings.mjs";
import {lesson_console_log_analogy_addition_symbol} from "./lesson_console_log_analogy_addition_symbol.mjs";
import {lesson_log_number_explain} from "./lesson_log_number_explain.mjs";
import {noop} from "./noop.mjs";
import {random_50_50} from "./random_50_50.mjs";
import {list_concat} from "./list_concat.mjs";
import {list_concat_multiple} from "./list_concat_multiple.mjs";
import {list_sort_string} from "./list_sort_string.mjs";
import {list_random_item} from "./list_random_item.mjs";
import {integer_random} from "./integer_random.mjs";
import {equal} from "./equal.mjs";
import {integer_random_digit_single} from "./integer_random_digit_single.mjs";
import {lesson_console_log_quiz_value} from "./lesson_console_log_quiz_value.mjs";
import {html_style_bold} from "./html_style_bold.mjs";
import {html_spacer_vertical} from "./html_spacer_vertical.mjs";
import {html_ul} from "./html_ul.mjs";
import {html_hr} from "./html_hr.mjs";
import {range} from "./range.mjs";
import {string_combine} from "./string_combine.mjs";
import {string_delimit} from "./string_delimit.mjs";
import {js_code_statement_let} from "./js_code_statement_let.mjs";
import {js_code_assign} from "./js_code_assign.mjs";
import {list_adder} from "./list_adder.mjs";
import {app_learn_code_random_identifiers} from "./app_learn_code_random_identifiers.mjs";
import {list_includes} from "./list_includes.mjs";
import {lesson_console_log_quiz} from "./lesson_console_log_quiz.mjs";
import {list_map} from "./list_map.mjs";
export function lesson_if_else_if() {
    let description = 'if with else';
    let example_message = string_combine('with an ', description);
    return lesson_simple(function () {
        let boolean = app_learn_code_random_boolean_binary();
        let values = app_learn_code_unique_multiple(app_learn_code_random_value, 2);
        let mapped = list_map(values, app_learn_code_log);
        let [a, b] = mapped;
        let lines = [`if (${boolean}) {`, a, `} else {`, b, `}`];
        return list_join_newline(lines);
    }, example_before, description, example_message, [screen1, screen2, screen3]);
    function example_before(parent) {
        'a number is positive if the number is greater than zero'
        'a number is negative if the number is less than zero'
        'if a number is neither positive nor negative , the number must be 0'
    }
    function screen1(parent) {
        
    }
}
