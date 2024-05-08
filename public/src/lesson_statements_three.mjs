import {lesson_console_log_quiz} from "./lesson_console_log_quiz.mjs";
import {lesson_simple} from "./lesson_simple.mjs";
import {html_p_text} from "./html_p_text.mjs";
export function lesson_statements_three() {
    const description = 'three `console.log` statements';
    const example_message = 'with three `console.log` statements';
    return lesson_simple(() => {
        return `${lesson_console_log_quiz()}
${lesson_console_log_quiz()}
${lesson_console_log_quiz()}`;
    }, example_before, description, example_message, []);
    function example_before(parent) {
        html_p_text(parent, 'if there are three statements , the first statement will run and then the second statement will run and then the third statement will run');
    }
}
