export function lesson_console_log() {
    return {
        description: 'outputting a string to the console',
        screens: [parent => {
            let text = 'a computer program has three parts :';
            html_span_text(parent, text);
            ' (1) an input , (2) a process and (3) an output';
        }]
    };
}
function html_span_text(parent, text) {
    let a = html_span(parent);
    html_inner_set(a, text);
}
function html_span(parent) {
    return html_element(parent, 'span');
}
