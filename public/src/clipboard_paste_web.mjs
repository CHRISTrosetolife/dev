export async function clipboard_paste_web(text) {
  return navigator.clipboard.readText(text);
}
