export function app_learn_code_eval(c) {
    let source_augmented = `let log_old = console.log;
            let messages = [];
            console.log = message => messages.push(message);
            ${c};
            console.log = log_old;
            messages;`;
    let messages = eval(source_augmented);
    return messages;
}
