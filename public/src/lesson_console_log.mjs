export function lesson_console_log() {
    return {
        description: 'outputting a string to the console',
        screens: [
            parent => {
                html_element(parent, 'span')
                'a computer program has three parts : (1) an input , (2) a process and (3) an output'
            }
        ]
    }
}