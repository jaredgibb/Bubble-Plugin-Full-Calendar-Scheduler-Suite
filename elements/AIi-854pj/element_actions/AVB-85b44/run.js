function(instance, properties, context) {
    if (instance.data.calendar != null && instance.data.calendar != 'undefined'){
        instance.data.calendar.setOption('showNonCurrentDates', properties.truefalse)
            instance.data.runDat()
    }else {
        console.warn('calendar is not ready yet')
    }


}