export async function html_audio(src) {
    if (!html_interacted()) {
        let overlay = html_overlay();
        await html_button_wait(overlay, "Press this button to enable audio");
      }
  let a = new Audio(src);
  let result = new Promise((resolve) => {
    a.addEventListener("ended", function () {
      a.currentTime = 0;
      resolve();
    });
  });
  await a.play();
  return await result;
}
