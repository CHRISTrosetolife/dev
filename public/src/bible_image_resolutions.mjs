export function bible_image_resolutions() {
  let smaller = 1080;
  let larger = 1920;
  let hvs = [
    {
      name: "horizontal",
      height: smaller,
      width: larger,
    },
    {
      name: "vertical",
      height: larger,
      width: smaller,
    },
  ];
  return hvs;
}
