function(instance, properties, context) {
    var fp
    instance.publishState('selected_date', properties.date.toISOString())
   

    function logThis (x){
        instance.publishState("selected_date", x.toISOString())
        instance.publishState("date", x.toString())
        console.log(x.toString())
    }
    let a = '#'+instance.data.divid
function init(){
    instance.canvas.append(`<input id="${instance.data.divid}" type="text" class="flatpickr" />`)
	instance.data.fp = flatpickr(a, {
    	enableTime: true,
        noCalendar: properties.also_use_calendar,
    	defaultDate: properties.date,
        dateFormat: properties.display_format,
        position: 'center',
        minuteIncrement: properties.minuteincrement,
        inline: false,
            onChange: function(selectedDates, dateStr) {
                let a = selectedDates[0]
				logThis(a)
				
        }
        
		});
    	instance.data.init = true
        instance.data.el = document.querySelector('#'+instance.data.divid)

}



(instance.data.init == false) ? init() : null

    if (instance.data.init == true){
        instance.data.fp.setDate(properties.date)
    }
    
}