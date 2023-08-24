function(instance, properties, context) {
    
    
    
    
    
    
var event = {
                'title': properties.title,
                'start': properties.start,
                'end': properties.end,
                'id': properties.id,
                'backgroundColor': properties.bgcolor,
                'borderColor': properties.bgcolor,
                'textColor': properties.textcolor,
                'editable': properties.editable,
                'extendedProps': {
                    'whatAmI': properties.identifier,
                    'eventSummary': properties.summary,
                    'eventLocation': properties.location,
                    'eventDurationMinutes': properties.durationmin,
                    'eventDurationHours': properties.durationhour,
                    'extraProperty1': properties.prop1,
                    'extraProperty2': properties.prop2
                },
                'resourceId': properties.resource
            }




instance.data.calendar.addEvent(event);


}