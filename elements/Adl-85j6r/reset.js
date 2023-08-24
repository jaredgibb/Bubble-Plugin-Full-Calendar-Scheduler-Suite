function(instance, context) {
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

        if (instance.data.isrange) {
            datepicker.selectDate([rangestart, rangeend]);
        } else if (instance.data.multipledates) {
            datepicker.selectDate(initialdates);
        } else if (instance.data.str_startdate !== null) {
            datepicker.selectDate(startdate);
        }
    }
}