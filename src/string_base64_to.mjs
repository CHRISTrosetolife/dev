export function string_base64_to(input) {
    return Buffer.from(input).toString('base64');
}