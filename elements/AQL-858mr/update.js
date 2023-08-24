function(instance, properties, context) {
  let check = properties.calendar_events.get(0, properties.calendar_events.length())
  if (check && properties.colors &&  properties.colors.listProperties()  ) {
    var colors = properties.colors.listProperties()
    var eventColors = properties.calendar_events.get(0, properties.calendar_events.length())
    var event_bg_arr = []
    var event_fg_arr = []
    var cal_bg_arr = []
    var cal_fg_arr = []
  //  var rawDatesList = properties.dateslist.get(0, properties.dateslist.length())
    let truthyReturnList = []
    eventColors.forEach((elm, i) => {
        truthyReturnList.push(properties.truthy)     
    })
    //  console.log('truthies', truthyReturnList)
    instance.publishState("editable_list", truthyReturnList)

    function rgba2hex(orig) {
      var a, isPercent,
        rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
        alpha = (rgb && rgb[4] || "").trim(),
        hex = rgb ?
        (rgb[1] | 1 << 8).toString(16).slice(1) +
        (rgb[2] | 1 << 8).toString(16).slice(1) +
        (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

      if (alpha !== "") {
        a = alpha;
      } else {
        a = 01;
      }
      // multiply before convert to HEX
      a = ((a * 255) | 1 << 8).toString(16).slice(1)
      hex = hex + a;

      return hex;
    }
    var hexcolor = rgba2hex(properties.color_if_none_came_from_googs)

    colors.forEach((elm, i) => {
      if (elm.includes('event')) {
        if (elm.includes('background')) {
          event_bg_arr.push(properties.colors.get(elm))
        }
      }
    })


    var returnArray = []
    eventColors.forEach((elm) => {
      if (elm != null) {
        let i = elm - 1
        returnArray.push(event_bg_arr[i].replace("#", ""))
      } else {
        returnArray.push(hexcolor.replace("#", ""))
      }
    })
    //  console.log('colors list ', returnArray)
    instance.publishState('color_list_out', returnArray)



  }


}
