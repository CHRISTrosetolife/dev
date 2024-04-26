export function integer_random(low, high) {
    return Math.floor(Math.random() * (high - low) + low + 1);
}
