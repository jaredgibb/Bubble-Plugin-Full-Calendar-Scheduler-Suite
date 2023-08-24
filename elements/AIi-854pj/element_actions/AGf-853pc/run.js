function(instance, properties, context) {
	
	let event = instance.data.calendar.getEventById(properties.id);


	event.setProp('title', properties.title);
    event.setProp('backgroundColor', properties.color);
    event.setProp('borderColor', properties.color);
    event.setProp('start', properties.start)
    event.setProp('end', properties.end)
    event.setProp('startEditable', properties.editable)
    event.setExtendedProp('whatAmI', properties.whatami)
    event.setExtendedProp('extraProperty1', properties.propone)
    event.setExtendedProp('extraProperty2', properties.proptwo)
    event.setProp('resourceId', properties.resourceid)
    event.setExtendedProp('eventLocation', properties.location)
    event.setExtendedProp('eventSummary', properties.summary)
    event.setExtendedProp('eventDurationHours', properties.hours)
    event.setExtendedProp('eventDurationMinutes', properties.minutes)

        


       
      


}