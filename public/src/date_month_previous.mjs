export function date_month_previous(d) {
  let month = d.getMonth();
  d.setMonth(d.getMonth() - 1);
  while (d.getMonth() === month) {
    d.setDate(d.getDate() - 1);
  }
  return d;
}
