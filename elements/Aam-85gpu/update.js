function(instance, properties, context) {
  //styling
  let a1 = document.createElement('style')
  a1.type = 'text/css'
  if (properties.size == 'extrasmall') {
    a1.innerHTML = `span.calendar__day-text{color: ${properties.weekdayscolor};}
.color-calendar { 
    width: 200px; 
    height: 277px;
}

.calendar__weekdays {
height: 20px;
}`
    instance.setHeight(277)

  } else {
    a1.innerHTML = `span.calendar__day-text{color: ${properties.weekdayscolor};}
.color-calendar { 
    width: 250px; 
    height: 300px;
}

.calendar__weekdays {
height: auto;
}`
    instance.setHeight(300)

  }




  document.getElementsByTagName('head')[0].appendChild(a1);
  if (instance.data.b == 1) {
    //create calendar
    let calB = new Calendar({
      id: "#color-calendar",
      theme: "glass",
      monthDisplayType: 'short',
      primaryColor: properties.now_date__event_dot,
      headerColor: properties.headercolor,
      headerBackgroundColor: properties.headerbackgroundcolor,
      weekdayType: "short",
      calendarSize: 'small',
      border: "5px solid rgba(4, 64, 160, 0.1)",
      dateChanged: (currentDate, events) => {
          
          if (instance.data.firstRun = true){

          
        let r = events.map(x => {
   
          return {
            "_p_Start": x.start,
            "_p_End": x.end,
            "_p_Title": x.title
          }

        })
        instance.publishState('date', currentDate)
        instance.publishState('clicked_days_event_info', r)
        if (instance.data.calb) {
          instance.triggerEvent('datepicker_date_selected')
        }
          
          }
          
          

          
          instance.data.firstRun = true
          
          
          
          
      },
      monthChanged: (currentDate, events) => {
        let a = events.map(x => {
          return {
            "_p_Start": x.start,
            "_p_End": x.end,
            "_p_Title": x.title
          }

        })
        instance.publishState('this_months_events', a)
      }
    });
    instance.data.calb = calB
    instance.data.b = 2

  }

  function checkMeForNull(item) {

    if (item == null || item == 'undefined') {
      return 'null'
    } else {
      return item
    }
  }
  //if the ranges dont exist, provide lists of start/end dates


  if (properties.start == null) {
      if (properties.startlist == null || properties.endlist == null){
          console.warn('small calendar is still waiting on your start or end list to populate')
      } else {
           var startList = properties.startlist.get(0, properties.startlist.length())
    var endList = properties.endlist.get(0, properties.endlist.length())
      }
   
  }


  function checkForValue(x, item) {
    if (item !== null) {
      return x.get(item)
    } else {
      return "no value provided"
    }
  }

const DateTime = luxon.DateTime
  let events = []
  if (properties.events !== null) {
    events = properties.events.get(0, properties.events.length()).map((x, i) => {
      var obj = {}
      if (properties.start !== null) {
     
        Object.assign(obj, {
          "start": DateTime.fromMillis(Date.parse(x.get(properties.start)[0])).toISO(),
          "end": DateTime.fromMillis(Date.parse(x.get(properties.start)[1])).toISO()
        })
      } else {
          Object.assign(obj, {
          "start": DateTime.fromMillis(Date.parse(startList[i])).toISO(),
          "end": DateTime.fromMillis(Date.parse(endList[i])).toISO()
        })
      }
		
      Object.assign(obj,{
        'title': checkForValue(x , properties.title),
        'summary': checkForValue(x, properties.summary),
        'extraData1': checkForValue(x, properties.extra_data_1),
        'extraData2': checkForValue(x,properties.extra_data_2),
        'resource': checkForValue(x, properties.resource),
        'location': checkForValue(x,properties.location),
        'identifier': checkForValue(x,properties.identifier)
      }) 
      return obj
    })
  }

 
  instance.data.calb.setEventsData(events)


}



