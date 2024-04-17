export function lesson_console_log() {
    return {
        description: 'outputting a string to the console',
        screens: [
            parent => {
                let text = 'a computer program has three parts :';
                let a = html_element(parent, 'span');
                html_inner_set(a, text)
                ' (1) an input , (2) a process and (3) an output'
            }
        ]
    }
}