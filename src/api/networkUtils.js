export function formatDate(dateString, format) {
  const fullDate = new Date(dateString);
  const day = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  let formattedDate;
  switch (format) {
    case 'd-m-yyyy':
      formattedDate = `${day}-${month}-${year}`;
      break;
    case 'd.m.yy':
      formattedDate = `${day}.${month}.${year % 100}`;
  }

  return formattedDate;
}
