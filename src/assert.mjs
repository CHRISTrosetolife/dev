export function assert(condition) {
    if (condition === false) {
        error('assert')
    }
}