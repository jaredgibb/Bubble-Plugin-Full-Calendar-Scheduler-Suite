function(properties, context) {

    var apple 
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function GFG_Fun() {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(),
    date.getMonth(), 1);

  var lastDay = new Date(date.getFullYear(),
    date.getMonth(), daysInMonth(date.getMonth() + 1,
      date.getFullYear()));

return lastDay
}

    return GFG_Fun



}