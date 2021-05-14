export function formatDate(d) {
  var date = new Date(d);

  if (isNaN(date.getTime())) {
    return d;
  } else {
    var month = [];
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sept";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    let day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }

    return day + " " + month[date.getMonth()] + " " + date.getFullYear();
  }
}
