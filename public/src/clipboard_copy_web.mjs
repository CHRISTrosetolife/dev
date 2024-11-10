export async function clipboard_copy_web(text) {
  await navigator.clipboard.writeText(text);
}
