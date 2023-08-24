function(instance, properties, context) {
    
    function logThis (x){
        instance.publishState("selected_date", x[0])
    }
    
function init(){
    instance.canvas.append(`<input id="input1" type="text" class="flatpickr"  />`)
	$('#input1').flatpickr({
    	defaultDate: properties.date,
        dateFormat: properties.display_format,
        inline: properties.inline,
        onChange: function(selectedDates, dateStr, instance) {
				logThis(selectedDates)

        }
		});
    instance.data.init = true
}



(instance.data.init == false) ? init() : console.warn("already initiated")
    
    
    
}