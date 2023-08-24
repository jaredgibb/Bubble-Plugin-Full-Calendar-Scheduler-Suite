function(instance, properties, context) {
    var uniqueid = instance.data.uniqueid;
    var el = instance.canvas.find('#' + uniqueid)[0];
    var picker = $(el);

    if (properties.blockeddays !== null) {
        instance.data.blockeddays = properties.blockeddays.get(0, 7);
    } else instance.data.blockeddays = [];

    if (properties.blockeddates !== null) {
        instance.data.blockeddates = properties.blockeddates.get(0, 1000000);
    } else instance.data.blockeddates = [];

    if (properties.initialdates !== null) {
        instance.data.initialdates = properties.initialdates.get(0, 1000000);
    } else instance.data.initialdates = [];

    var initialdates = instance.data.initialdates;

    var blockeddays = instance.data.blockeddays;
    var blockeddates = instance.data.blockeddates;

    instance.data.startdate = properties.startdate;
    instance.data.rangestart = properties.rangestart;
    instance.data.rangeend = properties.rangeend;
    instance.data.enable_range = properties.enable_range!=null;
   // console.log('enable_range',properties.enable_range!=null);
    var isrange = properties.enable_range!=null;
    instance.use_auto_binding = properties.use_auto_binding;
    var startDate;
    if (properties.use_auto_binding) {
        startDate = properties.autobinding;
    } else startDate = instance.data.startdate;

    var rangestart = instance.data.rangestart;
    var rangeend = instance.data.rangeend;

    var daycolor = properties.daycolor;
    var highlight = properties.highlight;
    var range_from_border = highlight.replace(/[\d\.]+\)$/g, ".5)");
    var range_from_bg = highlight.replace(/[\d\.]+\)$/g, ".1)");
    if(properties.inline){
        instance.data.div.css("cursor", "default");
    }
    var style = '<style>';
    /*
        style += '#' + uniqueid + ' .datepicker--day-name { color: ' + daycolor + '; } ';
        style += '#' + uniqueid + ' .datepicker--button { color: ' + highlight + '; } ';
        style += '#' + uniqueid + ' .datepicker--cell.-selected-, .datepicker--cell.-selected-.-current-{ background: ' + highlight + ' !important; color: white !important} ';
        style += '#' + uniqueid + ' .datepicker--cell.-selected-. -focus- { background: ' + highlight + '; } ';
        style += '#' + uniqueid + ' .datepicker--cell.-current- { color: ' + highlight + '; }';
        style += '#' + uniqueid + ' .datepicker--cell.-range-to- {border: 1px solid ' + range_from_border + ';background-color: ' + range_from_bg + ';}';
        style += '#' + uniqueid + ' .datepicker--cell.-range-from- {border: 1px solid ' + range_from_border + ';background-color: ' + range_from_bg + ';}';
        style += '#' + uniqueid + ' .datepicker--cell.-in-range- { background: ' + range_from_bg + ' !important}';
        if (!properties.inline) {
            style += 'input#' + uniqueid + '::placeholder { color: ' + properties.placeholder_color + '; opacity: 1;}';
            style += 'input#' + uniqueid + ':-ms-input-placeholder { color: ' + properties.placeholder_color + '; }';
            style += 'input#' + uniqueid + '::-ms-input-placeholder { color: ' + properties.placeholder_color + '; }';
        }
      */

    style += '.datepicker--day-name { color: ' + daycolor + '; } ';
    style += '.datepicker--button { color: ' + highlight + '; } ';
    style += '.datepicker--cell.-selected-, .datepicker--cell.-selected-.-current-{ background: ' + highlight + ' !important; color: white !important} ';
    style += '.datepicker--cell.-selected-. -focus- { background: ' + highlight + '; } ';
    style += '.datepicker--cell.-current- { color: ' + highlight + '; }';
    style += '.datepicker--cell.-range-to- {border: 1px solid ' + range_from_border + ';background-color: ' + range_from_bg + ';}';
    style += '.datepicker--cell.-range-from- {border: 1px solid ' + range_from_border + ';background-color: ' + range_from_bg + ';}';
    style += '.datepicker--cell.-in-range- { background: ' + range_from_bg + ' !important}';
    style += '.datepicker--cell.-current-.-in-range- {color: '+ daycolor +';}';

    if (!properties.inline) {
        style += 'input#' + uniqueid + '::placeholder { color: ' + properties.placeholder_color + '; opacity: 1;}';
        style += 'input#' + uniqueid + ':-ms-input-placeholder { color: ' + properties.placeholder_color + '; }';
        style += 'input#' + uniqueid + '::-ms-input-placeholder { color: ' + properties.placeholder_color + '; }';
    }

    style += '.datepicker--time-row input[type=range]:focus::-webkit-slider-thumb {background: '+ highlight+'; border-color: '+highlight+'; width: 30px; }';
    style +='.datepicker--time-row input[type=range]:focus::-moz-range-thumb {background: '+highlight +'; border-color: '+highlight+'; width: 30px; }';
    style +='.datepicker--time-row input[type=range]:focus::-ms-thumb {background: '+highlight +'; border-color: '+highlight +' ; width: 30px;}';
    style += '</style>';
    $(style).appendTo('head');

    //var disabledDays = blockedDays(); //static days blocking
    var disabledDays = blockeddays.concat(blockedDays()); //in case both static and dynamic were inputed

    function todayButton() {
        if (properties.todaybutton) {
            var today = new Date();
            var day = today.getDay();
            if (disabledDays.indexOf(day) != -1) {
                return false;
            } else return today;
        } else return false;
    }

    //format for date and placeholder
    var phformat;
    var dateformat;
    if (!properties.use_custom) {
        if (properties.dateformat == '22/6/1983') {
            phformat = 'D/M/YYYY';
            dateformat = 'd/m/yyyy';
        } else if (properties.dateformat == '6/22/1983') {
            phformat = 'M/D/YYYY';
            dateformat = 'm/d/yyyy';
        } else if (properties.dateformat == '22 June 1983') {
            phformat = 'D MMMM YYYY';
            dateformat = 'd MM, yyyy';
        } else if (properties.dateformat == 'Wednesday 22 June 1983') {
            phformat = 'dddd D MMMM YYYY';
            dateformat = 'DD, d MM, yyyy';
        } else {
            phformat = 'D-MMM-YYYY';
            dateformat = 'd-M-yyyy';
        }
    } else {
        phformat = 'D/M/YYYY';
        dateformat = properties.custom_format;
    }

    //placeholder
    var placeholder;
    var today = new Date();

    if (properties.placeholder !== "") {
        placeholder = properties.placeholder;
    } else if (properties.onlytimepicker) {
        placeholder = "12:00 PM";
    } else if (!properties.showtime) {
        placeholder = moment(today).format(phformat);
    } else {
        placeholder = moment(today).format(phformat) + ' 12:00 PM';
    }

    el.placeholder = placeholder;

    //language selection
    function language() {
        if (!properties.use_custom_lang) {
            if (properties.language === 'English') return 'en';
            else if (properties.language === 'French') return 'fr';
            else if (properties.language === 'Spanish') return 'es';
            else if (properties.language === 'German') return 'de';
            else if (properties.language === 'Russian') return 'ru';
            else if (properties.language === 'Italian') return 'it';
            else if (properties.language === 'Catalan') return 'ca';
            else return 'en';
        } else {
            var lang = 'en';
            try {
                lang = JSON.parse(properties.lang_definition);
            } catch (e) {
                console.log("Error passing language defintion. Using English");
                console.log(e);
            }
            return lang;
        }

    }
    //get default position
    var dposition = properties.verticalposition + ' ' + properties.horizontalposition;


    // A function to check whether the element fits inside the viewport. to be used for automatic positioning
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var fitsLeft = (rect.left >= 0 && rect.left <= $(window).width());
        var fitsTop = (rect.top >= 0 && rect.top <= $(window).height());
        var fitsRight = (rect.right >= 0 && rect.right <= $(window).width());
        var fitsBottom = (rect.bottom >= 0 && rect.bottom <= $(window).height());
        return {
            top: fitsTop,
            left: fitsLeft,
            right: fitsRight,
            bottom: fitsBottom,
            all: (fitsLeft && fitsTop && fitsRight && fitsBottom)
        };
    }

    function showTime() {
        if(properties.inline){
            return false;
        }
        else{
            if (properties.onlytimepicker) return true;
            else return properties.showtime;
        }
    }

    function firstDay() {
        if (properties.firstday == 'Sunday') return 0;
        else if (properties.firstday == 'Monday') return 1;
        else if (properties.firstday == 'Tuesday') return 2;
        else if (properties.firstday == 'Wednesday') return 3;
        else if (properties.firstday == 'Thursday') return 4;
        else if (properties.firstday == 'Friday') return 5;
        else if (properties.firstday == 'Friday') return 6;
        else return "";
    }

    function blockedDays() {
        var disabledDays = [];
        if (properties.blocksundays) disabledDays.push(0);
        if (properties.blockmondays) disabledDays.push(1);
        if (properties.blocktuesdays) disabledDays.push(2);
        if (properties.blockwednesdays) disabledDays.push(3);
        if (properties.blockthursdays) disabledDays.push(4);
        if (properties.blockfridays) disabledDays.push(5);
        if (properties.blocksaturdays) disabledDays.push(6);
        return disabledDays;
    }


    function multiDate() {
        if (properties.multipledatesmax > 1) return properties.multipledatesmax;
        else return properties.multipledates;
    }

    var multidate = multiDate();


    function timeFormat() {
        if (properties.timeformat == "12 hour") return "hh:ii AA";
        else return "hh:ii";
    }
    $(document).ready(function(){
        if ( !instance.data.isInitialized ){
        if (instance.data.first_time && properties.inline) {
            var style = '<style>';
            style += '#' + uniqueid + ' .datepicker { border-radius: 0px; } ';
            style += '</style>';
            $(style).appendTo('head');

            $('#' + uniqueid).remove();
            instance.data.div.attr('id', uniqueid);
            el = instance.canvas.find('#' + uniqueid)[0];
            picker = $(el)
        }

        instance.data.first_time = false;

        picker.datepicker({
            language: language(),
            view: properties.view,
            inline: false,
            dateFormat: dateformat,
            todayButton: todayButton(),
            autoClose: properties.autoclose,
            clearButton: properties.clearbutton,
            okButton: properties.okbutton,
            position: dposition, // Default position
            minDate: properties.mindate,
            maxDate: properties.maxdate,
            firstDay: firstDay(),
            keyboardNav: properties.enablekeyboardnav,
            multipleDates: multidate,
            multipleDatesSeparator: properties.dateseparator,
            range: properties.enable_range!=null,
            toggleSelected: properties.toggle_selected,
            //time options
            timepicker: showTime(),
            onlyTimepicker: properties.onlytimepicker,
            timeFormat: timeFormat(),
            minHours: properties.minhrs,
            maxHours: properties.maxhrs,
            hoursStep: properties.hoursstep,
            minMinutes: properties.minminutes,
            maxMinutes: properties.maxminutes,
            minutesStep: properties.minutesstep,
            minView : properties.minview,
            onHide: function(inst, animationComplete) {
                var dates = inst.selectedDates; //will always be array of dates
                var dates_length = dates.length;
                instance.publishAutobinding(dates[0]);
                var curTimestamps = dates.map(function (date) {
                    return date.getTime();
                });
                var curDates = curTimestamps.map(function (timestamp) {
                    return new Date(timestamp);
                });

                //instance.publishState('value', getRange(dates)[0]);

                if (properties.enable_range && dates_length > 1) {
                    if (rangeContainsBlockedDates(blockeddates, inst.minRange, inst.maxRange)) {
                        inst.removeDate(dates[0]);
                        inst.removeDate(dates[dates_length - 1]);
                        instance.triggerEvent('invalid_range', function() {});
                    } else {
                        instance.publishState('valuelist', getDatesInRange(curDates[0], curDates[(curDates.length - 1)]));
                    }
                } //else instance.publishState('valuelist', date);
                if (curDates.length > 0) {
                    instance.publishState('value',curDates[0]);
                    instance.publishState('range', getRange(curDates));
                    instance.publishState('valuelist', curDates.sort());
                } else {
                    instance.publishState('range', null);
                    instance.publishState('value',null);
                    instance.publishState('valuelist',null);
                }
                /*
                  if(!instance.data.first_time){
                    if(!dateArraysEqual(instance.data.prevDates, dates)){
                      instance.triggerEvent('date_selected', function() {});
                      instance.data.prevDates = dates.slice(0);
                   }
                  }
                */
                inst.update('position', dposition); // Update the position to the default again
                /*
                    if(animationComplete){
                        instance.publishState('value', dates[dates.length - 1]); //return first date value
                        instance.publishState('valuelist', dates);//return list of date values. Even if a single date
                        if(dates.length > 0){
                          instance.publishState('range',getRange(dates) );
                        }
                        else instance.publishState('range',null);
                     }
                      */

                if (animationComplete) {
                    inst.view = properties.view; //set original view
                    instance.triggerEvent('on_hide', function() {});
                    if (!instance.data.first_time) {
                        //console.log('cur',dates[0].getTime());
                        //console.log('prev',instance.data.prev[0]);

                        if (!timestampsEqual(instance.data.prev, curTimestamps)) {
                            instance.triggerEvent('date_selected');
                            //instance.data.prevDates = curDates;
                            instance.data.prev = curTimestamps;
                        }
                    }

                }
            },

            onSelect: function(formattedDate, date, inst) {
                if(properties.inline_updateonselect){
                    if (properties.inline && inst.selectedDates && (inst.selectedDates[0]!=null)) {
                        var dates = inst.selectedDates; //will always be array of dates
                        var dates_length = dates.length;
                        instance.publishAutobinding(dates[0]);
                        var curTimestamps = dates.map(function (date) {
                            return date.getTime();
                        });
                        var curDates = curTimestamps.map(function (timestamp) {
                            return new Date(timestamp);
                        });

                        //instance.publishState('value', getRange(dates)[0]);

                        if (isrange && dates_length > 1) {
                            if (rangeContainsBlockedDates(blockeddates, inst.minRange, inst.maxRange)) {
                                inst.removeDate(dates[0]);
                                inst.removeDate(dates[dates_length - 1]);
                                instance.triggerEvent('invalid_range', function() {});
                            } else {
                                instance.publishState('valuelist', getDatesInRange(curDates[0], curDates[(curDates.length - 1)]));
                            }
                        } //else instance.publishState('valuelist', date);
                        if (curDates.length > 0) {
                            instance.publishState('value',curDates[0]);
                            instance.publishState('range', getRange(curDates));
                            instance.publishState('valuelist', curDates.sort());
                        } else {
                            instance.publishState('range', null);
                            instance.publishState('value',null);
                            instance.publishState('valuelist',null);
                        }


                        if (!dateArraysEqual(instance.data.prev, dates)) {
                            if (isrange && dates.length == 2) {
                                instance.triggerEvent('date_selected', function() {});
                            } else if (!isrange && !properties.multipledates) {
                                instance.triggerEvent('date_selected');
                            } else {
                                //don't trigger date_selected event for multipledates as we don't know when user will be done with selection.
                            }

                        }
                    }//end of inline
                }
                if(!date){
                    instance.publishState('range', null);
                    instance.publishState('value',null);
                    instance.publishState('valuelist',null);
                }
            },
            onShow: function(inst, animationComplete) {
                //if today is blocked don't show today button even if the user has selected show today button
                var day = (new Date()).getDay();
                if (disabledDays.indexOf(day) != -1) {
                    inst.todayButton = false;
                }

                if (!animationComplete) {

                    // Just before showing the datepicker
                    if (properties.autoposition) {
                        // Loop through a few possible position and see which one fits
                        let iFits = false;
                        $.each([dposition, 'bottom left', 'bottom center', 'bottom right', 'top left', 'top center', 'top right'],
                            function(i, pos) {
                                if (!iFits) {
                                    inst.update('position', pos);
                                    var fits = isElementInViewport(inst.$datepicker[0]);
                                    if (fits.all) {
                                        iFits = true;
                                        return;
                                    }
                                }
                            });
                    }//end of properties.autoposition
                } //end of !animationComplete
                if (animationComplete) {
                    instance.triggerEvent('on_show', function() {});
                }
            },
            onOk: function(inst){
                if(properties.inline){

                }
                //console.log('ok called',inst.selectedDates);
                instance.triggerEvent('on_ok');

            },
            onChangeView: function(view) {
                instance.publishState('view', view);
                instance.triggerEvent('view_changed');
            },
            onRenderCell: function(d, cellType) {
                if (disabledDays.length > 0 || blockeddates.length > 0) {
                    if (cellType == 'day') {
                        //disable blocked days
                        var day = d.getDay(),
                            disable_day = disabledDays.indexOf(day) != -1;

                        //disable block dates
                        var disable_date = false;
                        if (blockeddates.length > 0) {
                            var cellYear = d.getFullYear(),
                                cellMonth = d.getMonth(),
                                cellDate = d.getDate(),
                                year, month, date;

                            blockeddates.forEach(function(myDate) {
                                year = myDate.getFullYear();
                                month = parseInt(myDate.getMonth());
                                date = parseInt(myDate.getDate());

                                if (cellYear == year && cellMonth == month && cellDate == date) {
                                    disable_date = true;
                                }
                            });
                        }

                        if (disable_day || disable_date) {
                            var disableclass = '';
                            var style = properties.disabled_cells_style;
                            if (style == 'strike through') {
                                disableclass = 'airdatepicker-disabled-strikethrough'
                            } else if (style == 'gray background') {
                                disableclass = 'airdatepicker-disabled-background'
                            } else {
                                disableclass = ''
                            }
                            return {
                                classes: disableclass,
                                disabled: true
                            }
                        }

                    } //end of (cellType == 'day')

                } //end of if(disabledDays.length>0

            }
		
        }); //end picker instantiation.

        //set intial dates
        var dp = picker.datepicker().data('datepicker');
        instance.data.datepicker = dp;
        if (isrange) {
            dp.selectDate([rangestart, rangeend]);
        } else if (properties.multipledates) {
            dp.selectDate(initialdates);
        } else {
            if (blockeddates.length > 1 && dateInList(startDate, blockeddates)) {
                dp.removeDate(startDate);
            } else {
                dp.selectDate(startDate);
            }
        }
        //console.log(dp.selectedDates)
        if (dp.selectedDates != null) {
            instance.data.prevDates = dp.selectedDates.slice(0)
        }

        //allow moving curser inside input but not editable. this is needed for when the input has a long list of dates
        //NB: keyboardNav will override this
        if (!properties.cursor) {
            picker.prop("readonly", true);
        } else {
            picker.on("input", function() {
                var formattedDates = dp.selectedDates.map(function(date) {
                    return dp.formatDate(dp.loc.dateFormat, date)
                }).join(dp.opts.multipleDatesSeparator);
                this.value = formattedDates;
            });
        }
        if (properties.disable) {
            el.disabled = true;
        } else {
            el.disabled = false;
        }

        //store these to be used in for the reset action
        instance.data.multipledates = properties.multipledates;
        instance.data.isrange = isrange;

        //store initial dates as strings for resetting.
        //we're doing this to avoid the issue where the time changes
        instance.data.str_rangestart = (rangestart !== null) ? moment(rangestart).toString() : null;
        instance.data.str_rangeend = (rangeend !== null) ? moment(rangeend).toString() : null;
        instance.data.str_startdate = (startDate !== null) ? moment(startDate).toString() : null;
        //initialdates is an array of dates so convert to array of strings
        instance.data.str_initialdates = [];
        if (initialdates !== null) {
            instance.data.str_initialdates = initialdates.map(function(date) {
                return moment(date).toString();
            });
        }

		instance.data.isInitialized = true;
        }
    }); //end of document ready



    //------------some utitlity date array functions---------------
    var date_sort_asc = function(date1, date2) {
        // This is a comparison function that will result in dates being sorted in
        // ASCENDING order.
        if (date1 > date2) return 1;
        if (date1 < date2) return -1;
        return 0;
    };

    var date_sort_desc = function(date1, date2) {
        // This is a comparison function that will result in dates being sorted in
        // DESCENDING order.
        if (date1 > date2) return -1;
        if (date1 < date2) return 1;
        return 0;
    };

    //takes a list of dates and return a range
    function getRange(vdates) {
        //var sortedDates = dates.splice(0);
        var sortedDates = [];
        sortedDates = vdates.slice(0);
        sortedDates.sort();
        // console.log('sortedDates',sortedDates);
        if (sortedDates.length > 0) {
            return [sortedDates[0], sortedDates[vdates.length - 1]];
        } else {
            return [sortedDates[0], sortedDates[0]];
        }

    }

    function getDatesInRange(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }


    function dateInRange(date, minRange, maxRange) {
        if (date >= minRange && date <= maxRange) {
            return true;
        } else {
            return false;
        }
    }

    function rangeContainsBlockedDates(blocked, minRange, maxRange) {
        var hasValid = false;
        for (i = 0; i < blocked.length; i++) {
            if (dateInRange(blocked[i], minRange, maxRange)) {
                hasValid = true;
                break;
            }
        }
        return hasValid;
    }

    function dateInList(date, datelist) {
        var inlist = false;
        for (var i = 0; i < datelist.length; i++) {
            if (datelist[i].getTime() == date.getTime()) {
                inlist = true;
                break;
            }
        }
        return inlist;
    }

    function dateArraysEqual(darray1, darray2) {
        if (darray1 == null && darray2 == null) return true;
        if (darray1 == null) return false;
        if (darray2 == null) return false;
        if (darray1.length != darray2.length) return false;
        darray1.sort();
        darray2.sort();
        for (i = 0; i < darray1.length; i++) {
            console.log("prev",darray1[i].getTime());
            console.log('current',darray2[i].getTime());
            if (darray1[i].getTime() != darray2[i].getTime()) return false;
        }
        return true;
    }

    function timestampsEqual(darray1, darray2) {
        if (darray1 == null && darray2 == null) return true;
        if (darray1 == null) return false;
        if (darray2 == null) return false;
        if (darray1.length != darray2.length) return false;
        darray1.sort();
        darray2.sort();
        for (i = 0; i < darray1.length; i++) {
            if (darray1[i] != darray2[i]) return false;
        }
        return true;
    }

    /*
  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}
*/
}
