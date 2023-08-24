function(instance, properties, context) {
let dow = [;
let retObj = []

if (properties.sunday_1){
   dow.push('Sun')
    retObj.push({
        "_p_Day": "Sunday",
        "_p_Start Time": properties.sunday_1[0], 
        "_p_End Time": properties.sunday_1[1]
    })
}
    if (properties.sunday_2){
    retObj.push({
        "_p_Day": "Sunday",
    "_p_Start Time": properties.sunday_2[0],
        "_p_End Time": properties.sunday_2[1]
    })
}if (properties.sunday_3){
   retObj.push({
        "_p_Day": "Sunday",
        "_p_Start Time": properties.sunday_3[0], 
       "_p_End Time": properties.sunday_3[1]
    })
}if (properties.monday_1){
    dow.push('Mon')
 retObj.push({
        "_p_Day": "Monday",
        "_p_Start Time": properties.monday_1[0], 
     "_p_End Time": properties.monday_1[1]
    })
}if (properties.monday_2){
 retObj.push({
        "_p_Day": "Monday",
      "_p_Start Time": properties.monday_2[0], 
     "_p_End Time": properties.monday_2[1]
    })
}if (properties.monday_3){
  retObj.push({
        "_p_Day": "Monday",
       "_p_Start Time": properties.monday_3[0], 
      "_p_End Time": properties.monday_3[1]
    })
}if (properties.tuesday_1){
    dow.push('Tue')
 retObj.push({
        "_p_Day": "Tuesday",
       "_p_Start Time": properties.tuesday_1[0],
     "_p_End Time": properties.tuesday_1[1]
    })
}if (properties.tuesday_2){
 retObj.push({
        "_p_Day": "Tuesday",
        "_p_Start Time":properties.tuesday_2[0], 
                         "_p_End Time": properties.tuesday_2[1]
    })
}if (properties.tuesday_3){
 retObj.push({
        "_p_Day": "Tuesday",
"_p_Start Time":properties.tuesday_3[0], 
     "_p_End Time": properties.tuesday_3[1]
    })
}if (properties.wednesday_1){
    dow.push('Wed')
 retObj.push({
        "_p_Day": "Wednesday",
"_p_Start Time":properties.wednesday_1[0], 
     "_p_End Time": properties.wednesday_1[1]
    })
}if (properties.wednesday_2){
 retObj.push({
        "_p_Day": "Wednesday",
"_p_Start Time": properties.wednesday_2[0], 
     "_p_End Time": properties.wednesday_2[1]
    })
}if (properties.wednesday_3){
 retObj.push({
        "_p_Day": "Wednesday",
"_p_Start Time": properties.wednesday_3[0],
     "_p_End Time": properties.wednesday_3[1]
    })
}if (properties.thursday_1){
    dow.push('Thur')
 retObj.push({
        "_p_Day": "Thursday",
 "_p_Start Time": properties.thursday_1[0], 
     "_p_End Time": properties.thursday_1[1]
    })
}if (properties.thursday_2){
 retObj.push({
        "_p_Day": "Thursday",
    "_p_Start Time": properties.thursday_2[0],
     "_p_End Time": properties.thursday_2[1]
    })
}if (properties.thursday_3){
     retObj.push({
        "_p_Day": "Thursday",
      "_p_Start Time":properties.thursday_3[0], 
         "_p_End Time": properties.thursday_3[1]
    })
}if (properties.friday_1){
    dow.push('Fri')
 retObj.push({
        "_p_Day": "Friday",
      "_p_Start Time": properties.friday_1[0], 
     "_p_End Time": properties.friday_1[1]
    })
}if (properties.friday_2){
   retObj.push({
        "_p_Day": "Friday",
     "_p_Start Time": properties.friday_2[0],
       "_p_End Time": properties.friday_2[1]
    })
}if (properties.friday_3){
 retObj.push({
        "_p_Day": "Friday",
    "_p_Start Time":properties.friday_3[0],
     "_p_End Time": properties.friday_3[1]
    })
}if (properties.saturday_1){
    dow.push('Sat')
 retObj.push({
        "_p_Day": "Saturday",
"_p_Start Time": properties.saturday_1[0],
     "_p_End Time": properties.saturday_1[1]
    })
}if (properties.saturday_2){
 retObj.push({
        "_p_Day": "Saturday",
       "_p_Start Time": properties.saturday_2[0], 
     "_p_End Time": properties.saturday_2[1]
    })
}if (properties.saturday_3){
 retObj.push({
        "_p_Day": "Saturday",
     "_p_Start Time": properties.saturday_3[0], 
     "_p_End Time": properties.saturday_3[1]
    })
}
	
    instance.publishState('day_time_list', retObj )
 	instance.publishState('daysofweek', dow)
    
}