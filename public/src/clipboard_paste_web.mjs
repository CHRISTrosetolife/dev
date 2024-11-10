export async function clipboard_paste_web() {
  return navigator.clipboard.readText();
}
