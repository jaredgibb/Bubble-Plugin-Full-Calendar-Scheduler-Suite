function(instance, properties, context) {


let event = instance.data.calendar.getEventById(properties.id);
 event.remove();
    instance.triggerEvent('event_deleted')
    


}