function(instance, properties, context) {
        if (instance.data.calendar != null && instance.data.calendar != 'undefined'){
          if (properties.dont){
        instance.data.calendar.changeView(properties.dynamic)
    } else {
        instance.data.calendar.changeView(properties.calendar_view);
    }
       instance.data.runDat()
       if (instance.data.extra){
                window.instance.publishState("startdatesout", instance.data.calendar.view.activeStart);
        		window.instance.publishState("enddatesout", instance.data.calendar.view.activeEnd);
            }
    }else {
        console.warn('calendar is not ready yet')
    }

    
  
}