function(e, a, context) {

var c = null != a.time_zone ? (c = luxon.DateTime.now().plus({ months: a.offset }).setZone(a.time_zone)) : luxon.DateTime.now().plus({ months: a.offset }),
    d = c.startOf("month");
b = d;
a = "Sunday" == a.start_on ? 0 : 1;
7 > d.weekday && (b = d.minus({ days: d.weekday - a }));
a = c.endOf("month");
for (c = []; b <= a; ) c.push(b.toMillis()), (b = b.plus({ days: 1 }));
e.publishState("month_dates", c);


}