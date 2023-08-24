function(instance, properties, context) {
 var DateTime = luxon.DateTime;
var Interval = luxon.Interval
var Duration = luxon.Duration  
    
    let a = properties.timeslots1.get(0,properties.timeslots1.length())
    let b = properties.timeslots1_end.get(0, properties.timeslots1_end.length())
    let c = properties.timeslots2.get(0,properties.timeslots2.length())
    let d = properties.timeslots2_end.get(0, properties.timeslots2_end.length())
    
let iArray1 = a.map((x,i)=>{
       let s1 = DateTime.fromMillis(Date.parse(x)).setZone(properties.tzid_1)
        let e1 = DateTime.fromMillis(Date.parse(b[i])).setZone(properties.tzid_1)
        return Interval.fromDateTimes(s1, e1)
})

let iArray2 = c.map((x,i)=>{
       let s2 = DateTime.fromMillis(Date.parse(x)).setZone(properties.tzid_2)
        let e2 = DateTime.fromMillis(Date.parse(d[i])).setZone(properties.tzid_2)
        return Interval.fromDateTimes(s2, e2)
})


let array =[]
iArray1.forEach(x=>{
	iArray2.forEach(y=>{
	if (x.intersection(y) != null){
		array.push(x.intersection(y))
	}
	})
})


//remember the miniumum times. 
let matches1 =[]
array.forEach(x=>{
if (x.length('minutes') > properties.minimum_meeting_time){
matches1.push(x) 
}
})

let matchingTimeSlots = matches1.map(x => {
      let range = [x.s.ts, x.e.ts]
      return range
    })



let uniqueMatchingSlots = matchingTimeSlots.filter((v, i, a) => a.indexOf(v) === i); 
instance.publishState('workingtimes', uniqueMatchingSlots)
    
    
    
    let mergedArrays = Interval.merge(matches1)
    mergedArrays=mergedArrays.map(x => {
      let range = [x.s.ts, x.e.ts]
      return range
    })
    
    instance.publishState('merged_times', mergedArrays)
    
    
    // split_(by_time)_merged_times

    let splitem = Interval.merge(matches1)
    let splitArraysbyTime =[]
        
    	splitem.forEach(x => {
      let newArray = x.splitBy(Duration.fromObject({minutes:properties.meeting_length}))
      console.log(newArray)
      newArray.forEach(y=>{
          y.length('minutes') == properties.meeting_length ? splitArraysbyTime.push(y) : null
      })
        })
    
    	console.log(splitArraysbyTime)
    	splitArraysbyTime = splitArraysbyTime.map(x=>{
                      let range = [x.s.ts, x.e.ts]
					return range
        })


    
    
    
    instance.publishState('split_(by_time)_merged_times', splitArraysbyTime)



}