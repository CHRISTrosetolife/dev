export function date_difference_hours(date1, date2) {
  let diffInMilliseconds = date2.getTime() - date1.getTime();
  let diffInHours = diffInMilliseconds / (1000 * 60 * 60);
  return diffInHours;
}
