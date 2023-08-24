function(instance, properties, context) {
              const DateTime = luxon.DateTime

     function round5(x){
   			 return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
			}
    
    if (properties.start_time != null ){
       
    var h,m
    (properties.start_time.getHours()>12) ? h = properties.start_time.getHours() - 12 : h = properties.start_time.getHours()

    m = properties.start_time.getMinutes()


     var uniqueid = instance.data.divid
    function init (){
   
	instance.publishState('time', DateTime.local(properties.start_time.getFullYear(), properties.start_time.getMonth(), properties.start_time.getDate(),properties.start_time.getHours(), round5(properties.start_time.getMinutes())).toISO())
instance.canvas.append(`<div >
  <div class="inline-flex text-md border rounded-md shadow-md p-1" id="biggun_${uniqueid}">
    <select name="" id="tail_hour_${uniqueid}" class="px-1 outline-none appearance-none bg-transparent">
      <option value="01">1</option>
      <option value="02">2</option>
      <option value="03">3</option>
      <option value="04">4</option>
      <option value="05">5</option>
      <option value="06">6</option>
      <option value="07">7</option>
      <option value="08">8</option>
      <option value="09">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      
    </select>
    <span class="px-2">:</span>
    <select name="" id="tail_minute_${uniqueid}" class="px-2 outline-none appearance-none bg-transparent">
      <option value="00">00</option>
      <option value="05">05</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
      <option value="25">25</option>
      <option value="30">30</option>
      <option value="35">35</option>
      <option value="40">40</option>
      <option value="45">45</option>
      <option value="50">50</option>
      <option value="55">55</option>
     
    </select>
    <select name="" id="tail_AMPM_${uniqueid}" class="px-2 outline-none appearance-none bg-transparent">
      <option value="AM">AM</option>
      <option value="PM">PM</option>
    </select>
  </div>
</div>`)

        
 	
instance.data.init = true
    
}
if (instance.data.init == false){
    init()
}
 let hour = document.getElementById(`tail_hour_${uniqueid}`)
 let min = document.getElementById(`tail_minute_${uniqueid}`)
 let ampm = document.getElementById(`tail_AMPM_${uniqueid}`)
        
        m = round5(m)
        m = m/5
        console.log(m,h)

    if (12 == m){
        min.selectedIndex = 0
        hour.selectedIndex = h
    } else {
        min.selectedIndex = m
        hour.selectedIndex = h-1
    }

     (properties.start_time.getHours() >= 12) ? ampm.selectedIndex = 1 : ampm.selectedIndex = 0
      document.getElementById(`biggun_${uniqueid}`).addEventListener('change', function(){
          	let finalHour = parseFloat(hour.value)
				if (ampm.value == 'PM' && parseFloat(hour.value) < 12 ){
                    finalHour = finalHour + 12
                } else if (ampm.value == 'AM' && parseFloat(hour.value) == 12){
                    finalHour = 0
                }
          instance.publishState('time',DateTime.local(properties.start_time.getFullYear(), properties.start_time.getMonth(), properties.start_time.getDate(),finalHour, parseFloat(min.value)).toISO() )
            
        
      })
        
       
    	 
        
        
        
        
        
        
        
    } else {
        console.warn('start time not available to time picker yet')
        return
    }

}