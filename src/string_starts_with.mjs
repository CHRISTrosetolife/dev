export function string_starts_with(input, prefix) {
    let input_length = string_length(input);
    let prefix_length = string_length(prefix);
    if (input < prefix_length) {
        return false;
    }
}