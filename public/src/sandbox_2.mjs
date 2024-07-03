export function sandbox_2() {
  videoshow(["image1.jpg", "image2.jpg", "image3.jpg"])
    .save("video.mp4")
    .on("error", function () {})
    .on("end", function () {});
}
