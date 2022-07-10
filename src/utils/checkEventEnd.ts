export const checkEventEnd = (end: string) => {
  let today = new Date();
  const endDate = end.split(' ')[0];
  const endTime = end.split(' ')[1];
  const endHour = endTime.split(':')[0];
  const endYear = endDate.split('-')[0];
  const endMonth = endDate.split('-')[1];
  const endDay = endDate.split('-')[2];
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  if (
    Number(endYear) <= Number(year) &&
    Number(endMonth) <= Number(month) &&
    Number(endDay) <= Number(day) &&
    Number(endDay) <= Number(day) &&
    Number(endHour) <= Number(hour)
  ) {
    return true;
  } else {
    return false;
  }
};
