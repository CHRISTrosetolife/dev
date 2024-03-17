export function string_starts_with(input, prefix) {
    let input_length = string_length(input);
    let prefix_length = string_length(prefix);
    if (input_length < prefix_length) {
        return false;
    }
    for (let i of range(prefix_length)) {
        if (string_get(input, i) !== string_get(prefix, i)) {
            return false;
        }
    }
    return true;
}