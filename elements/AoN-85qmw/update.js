function(instance, properties, context) {
   var rangeout=[]
   var returnlist =[]
   var timereturnlist =[]
if (properties.starttime && properties.endtime){
    
        instance.data.starttime = properties.starttime
        instance.data.endtime = properties.endtime
        ///create start minutes
        var start=properties.starttime.getHours()*60
        start=start+properties.starttime.getMinutes()
        //add start to range
        rangeout.push(start)
        //create end minutes
        var end = properties.endtime.getHours()*60
        end=end+properties.endtime.getMinutes()
        //add end to range
        rangeout.push(end) 
        instance.publishState('timerange',rangeout)
		returnlist.push(rangeout)
        //publish data
    	timereturnlist.push([properties.starttime,properties.endtime])
    
    
    
    	if (properties.range_2_start_time && properties.range_2_end_time){
            let sT2 = properties.range_2_start_time
            let eT2 = properties.range_2_end_time
            
            let s2 = sT2.getHours()*60
            s2 = s2 + sT2.getMinutes()
            let e2 = eT2.getHours()*60
            e2 = e2 + eT2.getMinutes()
            
            returnlist.push([s2,e2])
            timereturnlist.push([properties.range_2_start_time, properties.range_2_end_time])
  
        }
    
    
   instance.publishState('time_range_list', returnlist)
    instance.publishState('realtimerangelist', timereturnlist)
	console.log(timereturnlist +'\n' + returnlist)
    
    if (rangeout[0] != null && properties.autobinding != null){

        if ( properties.autobinding[0] !== rangeout[0] || properties.autobinding[1] !== rangeout[1]){
			console.log('a datachange should occur to')
        instance.publishAutobinding(rangeout)
    } 
    }
    
} else {
   instance.publishState('time_range_list', [])
    instance.publishState('realtimerangelist', [])
}

    	console.log(properties.changes)



}