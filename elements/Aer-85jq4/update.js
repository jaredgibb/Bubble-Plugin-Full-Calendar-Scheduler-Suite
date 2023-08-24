function(instance, properties, context) {
var DateTime = luxon.DateTime;
  var Interval = luxon.Interval
  var Settings = luxon.Settings
  console.log = function() {};

  function doWork(rule) {
    var mondayAvail = []
    var tuesdayAvail = []
    var wednesdayAvail = []
    var thursdayAvail = []
    var fridayAvail = []
    var saturdayAvail = []
    var sundayAvail = []
    var availableIntervals = []
    var blockedTimeSlots = []
    var cleanedArrayOfIntervals = []
    var arrayOfObjectsToReturn = []
    var resourceList = []
    var returnObject = []





    if (properties.mondayAvail) {
      mondayAvail = properties.mondayAvail.get(0, properties.mondayAvail.length())
      console.log(mondayAvail)
    }
    if (properties.tuesdayAvail) {
      tuesdayAvail = properties.tuesdayAvail.get(0, properties.tuesdayAvail.length())
    }
    if (properties.wednesdayAvail) {
      wednesdayAvail = properties.wednesdayAvail.get(0, properties.wednesdayAvail.length())
    }
    if (properties.thurdayAvail) {
      thursdayAvail = properties.thurdayAvail.get(0, properties.thurdayAvail.length())
    }
    if (properties.fridayAvail) {
      fridayAvail = properties.fridayAvail.get(0, properties.fridayAvail.length())
    }
    if (properties.saturdayAvail) {
      saturdayAvail = properties.saturdayAvail.get(0, properties.saturdayAvail.length())
    }
    if (properties.sundayAvail) {
      sundayAvail = properties.sundayAvail.get(0, properties.sundayAvail.length())
    }


    let allTimeSlots = rule.all().map((elm, i) => {
      availableIntervals.push(Interval.fromDateTimes(DateTime.fromMillis(Date.parse(elm)).setZone(properties.timezoneid).plus({
        minutes: properties.beginingbuffer
      }), DateTime.fromMillis(Date.parse(elm)).setZone(properties.timezoneid).plus({
        minutes: properties.eventduration
      })))
    })


    //create canceling timeframes
    if (properties.blocked_date_time_ranges) {
      let blockages = properties.blocked_date_time_ranges.get(0, properties.blocked_date_time_ranges.length())
      blockages.forEach((x) => {
        let startOfSlot = DateTime.fromMillis(Date.parse(x[0])).setZone(properties.timezoneid)
        let endOfSlot = DateTime.fromMillis(Date.parse(x[1])).setZone(properties.timezoneid)
        blockedTimeSlots.push(Interval.fromDateTimes(startOfSlot, endOfSlot))
      })
    }





instance.publishState('cumulative_count_list_for_orchestra_1', availableIntervals.map((e,i)=>{
return i + 1
})
  )                    


    instance.publishState('list_of_date_intervals', availableIntervals.map(x => {
      return [x.s.toISO(), x.e.toISO()]
    }))


    let returnHourMin = function getTimes(min) {
      let hour = min / 60
      hour = Math.trunc(hour)
      let minutes = min % 60

      return [hour, minutes]
    }



    function returnAvailInteval(x, s, e) {

      let dur = Interval.fromDateTimes(
        DateTime.fromObject({
          year: x.s.year,
          month: x.s.month,
          day: x.s.day,
          hour: returnHourMin(s)[0],
          minute: returnHourMin(s)[1]
        }).setZone(properties.timezoneid, {
          keepLocalTime: true
        }), DateTime.fromObject({
          year: x.e.year,
          month: x.s.month,
          day: x.s.day,
          hour: returnHourMin(e)[0],
          minute: returnHourMin(e)[1]
        }).setZone(properties.timezoneid, {
          keepLocalTime: true
        }))

      return dur
    }


    availableIntervals.map((x, i) => {

        switch (x.s.weekday) {
          case 1:
            if (mondayAvail.length >= 1) {
              console.log('trying monday')
              mondayAvail.forEach(y => {
                console.log(y)
                let mondayDuration = returnAvailInteval(x, y[0], y[1])
                if (mondayDuration.engulfs(x)) {
                  cleanedArrayOfIntervals.push(x)

                }
              })

            }

            break;
          case 2:
            if (tuesdayAvail.length >= 1) {
              tuesdayAvail.forEach(y => {
                let tuesDur = returnAvailInteval(x, y[0], y[1])
                if (tuesDur.engulfs(x)) {
                  cleanedArrayOfIntervals.push(x)

                }
              })

            }

            break;
          case 3:
            if (wednesdayAvail.length >= 1) {

              wednesdayAvail.forEach(y => {
                let wedDur = returnAvailInteval(x, y[0], y[1])
                if (wedDur.engulfs(x)) {
                  cleanedArrayOfIntervals.push(x)

                }
              })

            }

            break;
          case 4:
            if (thursdayAvail.length >= 1) {
              thursdayAvail.forEach(y => {
                  let thurDur = returnAvailInteval(x, y[0], y[1])
                  if (thurDur.engulfs(x)) {
                    cleanedArrayOfIntervals.push(x)

                  }

                })
              }
              break;
              case 5:
                if (fridayAvail.length >= 1) {

                  fridayAvail.forEach(y => {
                    let friDur = returnAvailInteval(x, y[0], y[1])
                    if (friDur.engulfs(x)) {
                      cleanedArrayOfIntervals.push(x)

                    }
                  })

                }

              break;
              case 6:
                if (saturdayAvail.length >= 1) {
                  saturdayAvail.forEach(y => {
                    let satDur = returnAvailInteval(x, y[0], y[1])
                    if (satDur.engulfs(x)) {
                      cleanedArrayOfIntervals.push(x)

                    }
                  })

                }

              break;
              case 7:
                if (sundayAvail.length >= 1) {


                  sundayAvail.forEach(y => {
                    let sunDur = returnAvailInteval(x, y[0], y[1])
                    if (sunDur.engulfs(x)) {
                      cleanedArrayOfIntervals.push(x)

                    }
                  })

                }
              break;
            }
        })

      instance.publishState('time_slotted_events', cleanedArrayOfIntervals.map(x => {


        return [x.s.toISO(), x.e.toISO()]
      }))

      cleanedArrayOfIntervals.map((x, i) => {
        let tf = false;
        blockedTimeSlots.map((y) => {
          if (x.overlaps(y)) tf = true
        })
        if (!tf) arrayOfObjectsToReturn.push(x)

      })

      arrayOfObjectsToReturn.forEach((e, i) => {
        resourceList.push(properties.events_resource_title)
        let ranNum = Math.random()
        returnObject.push({
          '_p_Event Start Time': e.s.toISO(),
          '_p_Event End Time': e.e.toISO(),
          '_p_Event Title': properties.time_slot_title,
          '_p_Calendar Editability': false,
          '_p_Recurrence Color': properties.colorizer,
          "_p_ID": "Event" + '_' + ranNum,
          "_p_Resource Title": properties.events_resource_title
        })
      });
      instance.publishState('availabletimeslots', returnObject)

    }


    var rule;


    if (true) {
      let object = {}

      function getFreq() {
        let a
        if (properties.repetitions == 'undefined' || properties.repetitions == null) {
          a = 'min'
        } else {
          a = properties.repetitions
        }
        switch (a.trim().toLowerCase()) {
          case 'min':
          case 'minute':
          case 'minutely':
            object.freq = rrule.RRule.MINUTELY
            break;
          case 'hr':
          case 'hour':
          case 'hourly':
            object.freq = rrule.RRule.HOURLY
            break;
          case 'wk':
          case 'week':
          case 'weekly':
            object.freq = rrule.RRule.WEEKLY
            break;
          case 'day':
          case 'daily':
            object.freq = rrule.RRule.DAILY
            break;
          case 'mon':
          case 'month':
          case 'monthly':
            object.freq = rrule.RRule.MONTHLY
            break;
          case 'yr':
          case 'year':
          case 'yearly':
            object.freq = rrule.RRule.YEARLY
            break
          default:
            object.freq = rrule.RRule.HOURLY
            break
        }
      }
      getFreq()
      let p
      if (properties.start_date !== "undefined" && properties.start_date !== null&&properties.end_date !== "undefined" && properties.end_date !== null ) {
        let e = properties.end_date
        let s = properties.start_date
    
        object.dtstart = new Date(s.getFullYear(), s.getMonth(), s.getDate(), s.getHours(), s.getMinutes())
        let s100 = DateTime.fromJSDate(s)
        object.until = new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes())
        p = s.getTimezoneOffset()
      } else {
        console.warn('you dont have a date ready yet')
        return
      }


      function interval() {
        if (properties.interval) {
          return properties.interval
        } else {
          return 1
        }
      }
      object.tzid = properties.timezoneid
      object.interval = interval()


      //   console.log(object)





      p = p / 60
      object.count = properties.count
      if (object.freq != rrule.RRule.MINUTELY) {
        object.byminute = properties.minuteoffset

      }



      if (properties.houroffset != null) {
        object.byhour = properties.houroffset + p
      } else {
        object.byhour = properties.houroffset
      }

      let weekdays = properties.byweekday
      let rule;
      null != weekdays &&
        ((object.byweekday = []),
          weekdays.split(',').map((e) => {
            switch (e.trim()) {
              case "mon":
              case "MON":
              case "Monday":
                object.byweekday.push(rrule.RRule.MO);
                break;
              case "TUE":
              case "tues":
              case "Tuesday":
                object.byweekday.push(rrule.RRule.TU);
                break;
              case "WED":
              case "wed":
              case "Wednesday":
                object.byweekday.push(rrule.RRule.WE);
                break;
              case "THUR":
              case "thur":
              case "Thursday":
                object.byweekday.push(rrule.RRule.TH);
                break;
              case "FRI":
              case "fri":
              case "Friday":
                object.byweekday.push(rrule.RRule.FR);
                break;
              case "SAT":
              case "sat":
              case "Saturday":
                object.byweekday.push(rrule.RRule.SA);
                break;
              case "SUN":
              case "sun":
              case "Sunday":
                object.byweekday.push(rrule.RRule.SU);
                break;
              default:
                console.warn("we couldnt figure out what day you intended for week start");
            }
          }));
      rule = new rrule.RRule(object)
      instance.publishState('the_recurring_event_rule_string', rule.toString())
      instance.publishState('the_rule_in_english', rule.toText())

      instance.publishState('list_of_dates', rule.all().map(x => {


        let offset1 = DateTime.fromMillis(Date.parse(x)).setZone(properties.timezoneid).offset
        let offset2 = DateTime.fromMillis(Date.parse(x)).setZone(properties.format_to).offset
        let offset3 = offset1 - offset2

        //  console.log(offset1,offset2)

        return DateTime.fromMillis(Date.parse(x)).minus({
          minutes: offset3
        }).toISO()
      }))

      instance.publishState('listOfDates', rule.all().map(x => {
        let offset1 = DateTime.fromMillis(Date.parse(x)).setZone(properties.timezoneid).offset
        let offset2 = DateTime.fromMillis(Date.parse(x)).setZone(properties.format_to).offset
        let offset3 = offset1 - offset2

        return {
          "_p_Point of Origin DateTime": DateTime.fromMillis(Date.parse(x)).setZone(properties.timezoneid).toISO(),
          "_p_Point of Origin TimeZone ID": properties.timezoneid,
          "_p_Point of View TimeZone ID": properties.format_to
        }
      }))





      doWork(rule)
    } else {
      rule = new rrule.RRule('DTSTART:20120201T023000Z\nRRULE:FREQ=MONTHLY;COUNT=5')
    }






  
}