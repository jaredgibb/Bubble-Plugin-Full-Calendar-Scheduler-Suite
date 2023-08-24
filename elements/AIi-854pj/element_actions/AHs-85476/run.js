function(instance, properties, context) {

    if (instance.data.calendar != null && instance.data.calendar != 'undefined'){
        instance.data.calendar.next()
            instance.data.runDat()
instance.data.dataout()

    }else {
        console.warn('calendar is not ready yet')
    }
    

}