export function string_base64_from(input) {
    return Buffer.from(input).toString('ascii');
}
