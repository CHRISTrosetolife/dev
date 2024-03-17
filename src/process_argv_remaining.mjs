export function process_argv_remaining() {
    let { argv } = process;
    let remaining = argv.slice(2);
    return remaining;
}