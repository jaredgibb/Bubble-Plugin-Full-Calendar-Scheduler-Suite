function(instance, properties, context) {
    var datepicker = instance.data.datepicker;
    //only do reset if not using autobinding
    if ((datepicker != null) && !instance.use_auto_binding ) {
        //Load any data 
        var uniqueid = instance.data.uniqueid;
        var startdate = new Date(instance.data.str_startdate);
        var rangestart = new Date(instance.data.str_rangestart);
        var rangeend = new Date(instance.data.str_rangeend);
        //convert the string arrays to date array
        var initialdates = [];
        if ((instance.data.str_initialdates).length > 0) {
            initialdates = instance.data.str_initialdates.map(function(str) {
                return new Date(str);
            });
        }

        datepicker.clear();
//console.log('range value is',instance.data.enable_range)
        if (instance.data.isrange) {
            datepicker.selectDate([rangestart, rangeend]);
            //instance.publishState('value',rangestart); 
            //instance.publishState('valuelist',[getDatesInRange(rangestart,rangeend)]); 
            //instance.publishState('range', [rangestart, rangeend]);
        } else if (instance.data.multipledates) {
            datepicker.selectDate(initialdates);
            instance.publishState('value',initialdates[0]); 
            instance.publishState('valuelist',initialdates);   
            instance.publishState('range', [initialdates[0], initialdates[initialdates.length-1]]);
            //console.log('reset multipledates')
        } else if (instance.data.str_startdate !== null) {
            datepicker.selectDate(startdate);
            instance.publishState('value',startdate); 
            instance.publishState('valuelist',[startdate]);   
            instance.publishState('range', [startdate,startdate]);
            //console.log('reset reset single')
        }
    }
}