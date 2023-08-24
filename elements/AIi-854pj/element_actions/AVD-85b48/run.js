function(instance, properties, context) {
   // console.log('asdfasdf')
                //instance.data.runDat()
        if (instance.data.calendar != null && instance.data.calendar != 'undefined'){
        instance.data.calendar.setOption('eventOverlap', properties.truefalse)
		console.log(instance.data.calendar.getOption('eventOverlap'))
    }else {
        console.warn('calendar is not ready yet')
    }


}