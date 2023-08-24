function(instance, context) {
  instance.data.event_arr = []
  instance.data.extra = false
  instance.data.eventBackgroundColor = 'transparent'
  //instance.data.resourcefontsize = '.85em'
  instance.data.timeslotformat = {
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: false,
    meridiem: 'short',
    hour12: true
  }
  instance.data.resize = false
    instance.data.tzid = 'America/Detroit'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randoInt = getRandomInt(100000)
instance.data.divid = 'FullCalendar' + randoInt
instance.data.array=[]
    
    instance.data.useresources == false
    instance.data.dataout = function(){
        
           if (instance.data.extra){
                        window.instance.publishState("startdatesout", instance.data.calendar.view.activeStart);
        window.instance.publishState("enddatesout", instance.data.calendar.view.activeEnd);
            }

    }
}
