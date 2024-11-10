export async function clipboard_paste_web(text) {
  navigator.clipboard.writeText(text);
}
