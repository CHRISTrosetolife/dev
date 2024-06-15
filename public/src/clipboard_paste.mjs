import clipboard from "clipboardy";
export async function clipboard_paste() {
  await clipboard.read();
}
