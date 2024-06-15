export function app_gs_direction(from, to) {
  let direction = null;
  if (to.y === from.y) {
    if (to.x > from.x) {
      direction = "right";
    }
    if (to.x < from.x) {
      direction = "left";
    }
  }
  if (to.x === from.x) {
    if (to.y > from.y) {
      direction = "down";
    }
    if (to.y < from.y) {
      direction = "up";
    }
  }
  return direction;
}
