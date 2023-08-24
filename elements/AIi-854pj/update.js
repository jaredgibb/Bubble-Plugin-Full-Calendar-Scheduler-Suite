function(instance, properties, context) {
	console.log = function () {};

	if (instance.data.doneiniting !== true) {
		instance.data.init = function () {
			function render() {
				let divID = instance.data.divid;
				instance.data.localee = properties.initlocale;

				function getRandomInt(max) {
					return Math.floor(Math.random() * max);
				}
				if (properties.initdatedots == true) {
					console.log("date dots");
					var dateDots = document.createElement("style");
					dateDots.type = "text/css";
					dateDots.innerHTML = `.fc-today .fc-day-number{
    padding: 2px;
    background: ${properties.initdatedotcolor} !important;
    border-radius: 50%;
    height: 1.25em;
    width: 1.25em;
    margin-right: .1em;
    margin-top: .1em;
    color: ${properties.initdatedottextcolor} !important;
    /* text-align: center; */
    font-size: .85em;
    top: auto;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    } 
    .fc-today {
    background-color:transparent !important;
    }


.popper,
.tooltip {
position: absolute;
z-index: 9999;
background: #FFC107;
color: black;
width: 150px;
border-radius: 3px;
box-shadow: 0 0 2px rgba(0,0,0,0.5);
padding: 10px;
text-align: center;
}
.style5 .tooltip {
background: #1E252B;
color: #FFFFFF;
max-width: 200px;
width: auto;
font-size: .8rem;
padding: .5em 1em;
}
.popper .popper__arrow,
.tooltip .tooltip-arrow {
width: 0;
height: 0;
border-style: solid;
position: absolute;
margin: 5px;
}

.tooltip .tooltip-arrow,
.popper .popper__arrow {
border-color: #FFC107;
}
.style5 .tooltip .tooltip-arrow {
border-color: #1E252B;
}
.popper[x-placement^="top"],
.tooltip[x-placement^="top"] {
margin-bottom: 5px;
}
.popper[x-placement^="top"] .popper__arrow,
.tooltip[x-placement^="top"] .tooltip-arrow {
border-width: 5px 5px 0 5px;
border-left-color: transparent;
border-right-color: transparent;
border-bottom-color: transparent;
bottom: -5px;
left: calc(50% - 5px);
margin-top: 0;
margin-bottom: 0;
}
.popper[x-placement^="bottom"],
.tooltip[x-placement^="bottom"] {
margin-top: 5px;
}
.tooltip[x-placement^="bottom"] .tooltip-arrow,
.popper[x-placement^="bottom"] .popper__arrow {
border-width: 0 5px 5px 5px;
border-left-color: transparent;
border-right-color: transparent;
border-top-color: transparent;
top: -5px;
left: calc(50% - 5px);
margin-top: 0;
margin-bottom: 0;
}
.tooltip[x-placement^="right"],
.popper[x-placement^="right"] {
margin-left: 5px;
}
.popper[x-placement^="right"] .popper__arrow,
.tooltip[x-placement^="right"] .tooltip-arrow {
border-width: 5px 5px 5px 0;
border-left-color: transparent;
border-top-color: transparent;
border-bottom-color: transparent;
left: -5px;
top: calc(50% - 5px);
margin-left: 0;
margin-right: 0;
}
.popper[x-placement^="left"],
.tooltip[x-placement^="left"] {
margin-right: 5px;
}
.popper[x-placement^="left"] .popper__arrow,
.tooltip[x-placement^="left"] .tooltip-arrow {
border-width: 5px 0 5px 5px;
border-top-color: transparent;
border-right-color: transparent;
border-bottom-color: transparent;
right: -5px;
top: calc(50% - 5px);
margin-left: 0;
margin-right: 0;
}


    `;
					document.getElementsByTagName("head")[0].appendChild(dateDots);
				}

				const checkForHTML = function (elm) {
					const regex =
						/<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/gi;
					return regex.exec(elm) ? true : false;
				};

				var styleCalendar = document.createElement("style");
				styleCalendar.type = "text/css";
				styleCalendar.innerHTML =
					"body {font-family: " +
					properties.initfont_famaly +
					"}" +
					" .fc-more-popover {max-height: 95%; overflow-y: auto;} .fc{overflow-y:auto;} .fc td, .fc th { border-color: " +
					properties.initborder_color +
					"; border-style: " +
					properties.initborder_style +
					"; }";
				document.getElementsByTagName("head")[0].appendChild(styleCalendar);

				let af = document.createElement("style");
				af.type = "text/css";
				af.innerHTML = `#${instance.data.divid} > div.fc-view-container > div > table {
    border: ${properties.inittableborderwidth}px solid ${properties.inittablebordercolor} !important;
    }`;
				document.getElementsByTagName("head")[0].appendChild(af);

				var styleText = document.createElement("style");
				styleText.type = "text/css";
				styleText.innerHTML =
					".fc-toolbar h2 {color: " +
					properties.inithed_color +
					"}" +
					" .fc td, .fc th {color: " +
					properties.initnum_color +
					"}" +
					'.fc-button ( padding: "0px"; margin: "0px";)';
				document.getElementsByTagName("head")[0].appendChild(styleText);

				var styleElement = document.createElement("style");
				styleElement.type = "text/css";
				styleElement.innerHTML =
					".fc-button-primary {color: " +
					properties.initcolor +
					"; background-color: " +
					properties.initbackground_color +
					"; border-color: " +
					properties.initborder_color1 +
					"}" +
					" .fc-button-primary:hover {color:  " +
					properties.inithover_color +
					"; background-color: " +
					properties.inithover_background_color +
					"; border-color: " +
					properties.inithover_border_color +
					"}" +
					" .fc-button-primary:disabled {color:" +
					properties.initdisabled_color +
					"; background-color: " +
					properties.initdisabled_background_color +
					"; border-color: " +
					properties.initdisabled_border_color +
					"; opacity: " +
					properties.initdisabled_opacity +
					"}" +
					" .fc-button-primary:not(:disabled).fc-button-active {color: " +
					properties.initactive_color +
					"; background-color:" +
					properties.initactive_background_color +
					"; border-color:" +
					properties.initactive_border_color +
					"}";
				document.getElementsByTagName("head")[0].appendChild(styleElement);

				function publishDrop(info, t, eventtype) {
					let b, a;
					if (info.prevEvent) {
						a = info.prevEvent.start;
						b = info.prevEvent.end;
					} else {
						b = info.oldEvent.end;
						a = info.oldEvent.start;
					}
					let model = {
						["_p_new Start Time"]: info.event.start,
						["_p_new End Time"]: info.event.end,
						["_p_event Title"]: info.event.title,
						["_p_event ID"]: info.event.id,
						["_p_event Color"]: info.event.backgroundColor,
						["_p_event Editable"]: info.event.startEditable,
						["_p_event Type"]: info.event.extendedProps.whatAmI,
						["_p_old Start Time"]: a,
						["_p_old End Time"]: b,
						["_p_Duration Minutes"]: info.event.extendedProps.eventDurationMinutes,
						["_p_Duration Hours"]: info.event.extendedProps.eventDurationHours,
						["_p_Event Location"]: info.event.extendedProps.eventLocation,
						["_p_Event Summary"]: info.event.extendedProps.eventSummary,
						["_p_Extra Property 1"]: info.event.extendedProps.extraProperty1,
						["_p_Extra Property 2"]: info.event.extendedProps.extraProperty2,
					};
					if (info.event._def.resourceIds) {
						model["_p_Event Resource"] = info.event._def.resourceIds[0];
					} else {
						model["_p_Event Resource"] = "no resource";
					}
					instance.publishState("modifiedeventdata", model);
					instance.triggerEvent("timeschanged");
				}

				var eventColor = properties.initeventcolor;
				var eventBackgroundColor = properties.initeventbackgroundcolor;
				var eventBorderColor = properties.initeventbordercolor;
				var eventTextColor = properties.initeventtextcolor;
				var buttonIcons = properties.initbuttonicons;
				var defaultDate = properties.initdefaultdate;
				var header1;
				if (!properties.initheaders) {
					header1 = false;
				} else {
					header1 = {
						left: "prev,next today",
						center: "title",
						right: "dayGridMonth,timeGridWeek,timeGridDay",
					};
				}
				instance.canvas.append(`<div><div id="${divID}" class="calHolder"></div></div>`);
				instance.data.divid = divID;
				var resource_area_element, resource_area_width;
				var calendarEl = document.getElementById(divID);
				var calendar = new FullCalendar.Calendar(calendarEl, {
					// timeZone: 'UTC',
					plugins: [
						"interaction",
						"dayGrid",
						"timeGrid",
						"list",
						"resourceTimeGrid",
						"resourceDayGrid",
						"bootstrap",
						"resourceTimeline",
						"moment",
						"momentTimezone",
					],
					schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
					header: header1,
					height: instance.data.height,
					fixedWeekCount: false,
					eventOverlap: false,
                    eventResourceEditable: properties.move_events_between_resources,
					resourceAreaWidth: properties.initresourceareasize,
					snapDuration: "00:05",
					defaultDate: defaultDate,

					slotWidth: 40,
					buttonIcons: buttonIcons,
					navLinks: true,
					loading: function (isloading) {
						console.log(isloading);
					},
					navLinkDayClick: function (date, jsEvent) {
						if (properties.initdayclickenterday) {
							calendar.gotoDate(date);
							setTimeout(function () {
								calendar.changeView("timeGridDay");
								instance.data.runDat();
							}, 75);
						}
					},
					eventRender: function (info) {
						var tooltip = new Tooltip(info.el, {
							title: info.event[properties.inittooltipfield],
							placement: "top",
							trigger: "hover",
							container: "body",
							delay: {
								show: 500,
								hide: 50,
							},
						});

						let header = document.getElementsByClassName("fc-resource-cell");
						if (this.state.viewType.includes("resource")) {
							for (let i = 0; i < header.length; i++) {
								header[i].style.fontSize = instance.data.resourcefontsize;
							}
						}
						let lerb = info.el.innerHTML;

						if (checkForHTML(info.event.title) == true) {
							info.el.innerHTML = "&nbsp";
							info.el.innerHTML = info.event.title;
							info.el.style.fontSize = ".85em";
							return info.el;
						}

						if (this.state.viewType == "dayGridMonth" && properties.initdatedots == true) {
							lerb = lerb.replace("fc-time", "");
							let dotColor;
							if (info.event.backgroundColor.includes("rgb")) {
								dotColor = info.event.backgroundColor;
							} else {
								if (!info.event.backgroundColor.includes("#")) {
									dotColor = "#" + info.event.backgroundColor;
								} else {
									dotColor = info.event.backgroundColor;
								}
							}
							let el = `<div id="parent" style="margin: 0;padding: 0;display: flex;justify-content: left; " > <div id="left" style="margin-top: .25em;padding: 0px;border: 0px solid lightgray;background-color: ${dotColor};width: .75em; height:.75em; border-radius: 50%; "> </div>  <div id="right" style="margin-left: 5px;padding: 0;border: 0px ;background-color: transparent;width: 85%; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-size:.85em">
    ${lerb}</div> </div>`;
							info.el.innerHTML = "&nbsp;";
							info.el.innerHTML = el;
							if (info.event.extendedProps.eventDurationHours > 24) {
								info.el.style.backgroundColor = instance.data.eventBackgroundColor;
							} else {
								info.el.style.backgroundColor = "transparent";
							}
							info.el.style.borderColor = "transparent";
							info.el.style.color = "black";
							return info.el;
						} else {
							info.el.style.fontSize = ".85em";
							return info.el;
						}
					},
					datesAboveResources: true,
					weekNumbers: false,
					dateClick: function (info) {
						instance.triggerEvent("dayclicked");
						if (info.view.type.includes("resource")) {
							instance.publishState("clicked_day_resource", info.resource.title);
						}
						instance.publishState("clicked_day_date", moment(info.dateStr).tz(instance.data.tzid).format());
						//(this.view.type.includes('resource')) ? instance.publishState('clicked_day_resource', 'resource' ) : console.warn('no resoure')
						if (properties.initdayclickenterday) {
							calendar.gotoDate(info.date);
							setTimeout(function () {
								calendar.changeView("timeGridDay");
							}, 100);
						}
					},
					resources: [],
					defaultView: properties.initcalendar_view,
					selectable: true,
					selectMirror: true,
					selectOverlap: function () {
						return properties.allowoverlap;
					},
					select: function (arg) {
						console.log(arg);
						let m = {
							"_p_Start Time": arg.start,
							"_p_End Time": arg.end,
						};
						if (arg.resource) {
							m["_p_Resource ID"] = arg.resource.id;
						} else {
							m["_p_Resource ID"] = "No Resource";
						}
						calendar.gotoDate(arg.start);
						instance.publishState("selected_timeframe_data", m);
						//instance.publishState("currentmonth", instance.data.calendar.getDate())
						instance.triggerEvent("select");
					},
					selectMinDistance: 5,
					eventLimit: true,
					eventDisplay: "auto",
					eventBackgroundColor: eventBackgroundColor,
					eventBorderColor: eventBorderColor,
					eventTextColor: eventTextColor,
					eventClick: function (info) {
						instance.publishState("xcoord", info.jsEvent.pageX);
						instance.publishState("ycoord", info.jsEvent.pageY);
						let clickObject = {
							"_p_Start Time": info.event.start,
							"_p_End Time": info.event.end,
							["_p_Duration Minutes"]: info.event.extendedProps.eventDurationMinutes,
							["_p_Duration Hours"]: info.event.extendedProps.eventDurationHours,
							["_p_Event Location"]: info.event.extendedProps.eventLocation,
							["_p_Event Summary"]: info.event.extendedProps.eventSummary,
							["_p_Extra Property 1"]: info.event.extendedProps.extraProperty1,
							["_p_Extra Property 2"]: info.event.extendedProps.extraProperty2,
							"_p_Event Title": info.event.title,
							"_p_Event id": info.event.id,
							"_p_Event Color": info.event.backgroundColor,
							"_p_Event Editable": info.event.startEditable,
							"_p_Event Type": info.event.extendedProps.whatAmI,
							"_p_Event Resource": info.event._def.resourceIds[0],
						};
						instance.publishState("event_data", clickObject);
						instance.triggerEvent("click");
					},
					eventTimeFormat: {
						hour: "numeric",
						minute: "2-digit",
						omitZeroMinute: true,
						meridiem: "narrow",
						hour12: true,
					},
					handleWindowResize: true,
					events: [],
					windowResize: function (view) {
						/* instance.data.calendar.render()*/
					},
                    
					nowIndicator: true,
					slotDuration: properties.inittimeslotduration + ":00",
					minTime: properties.initstarttime + ":00",
					maxTime: properties.initendtime + ":00",
					scrollTime: properties.initscrolltime + ":00",
					longPressDelay: 250,
					editable: true,
					views: {
						timeGrid: {
							eventLimit: 3,
						},
						fourDays: {
							type: "resourceTimeGrid",
							duration: {
								days: 4,
							},
							buttonText: "4 days",
						},
						fiveDays: {
							type: "dayGridWeek",
							duration: {
								days: 5,
							},
						},
					},

					eventResize: function (info) {
						publishDrop(info, this);
					},
					datesRender: function (info) {
						instance.triggerEvent("events_rendered");
						instance.publishState("calendar_rendered", true);
					},
					viewSkeletonRender: function (info) {
						instance.triggerEvent("skeleton_rendered");
					},
					eventDrop: function (info) {
						if (properties.initverifyeventdrop) {
							console.log(info.event);
							let aaaa = confirm("Are you sure about this change?");
							if (aaaa == true) {
								if (info.event.startEditable) {
									publishDrop(info, this);
								} else {
									info.revert();
								}
							} else {
								info.revert();
							}
						} else {
							console.log(info.event.startEditable);
							publishDrop(info, this);
						}
					},
				});

				//  let drag = false;
				let inout = false;
				let x1;
				//set column width manually
				document.addEventListener("mousedown", (e) => {
					// drag = false
					if (e.target.getAttribute("class") == "fc-divider fc-col-resizer fc-widget-header") {
						inout = true;
						x1 = e.clientX;
					} else {
						inout = false;
					}
				});

				document.addEventListener("mouseup", (e) => {
					if (inout) {
						let totalChange = e.clientX - x1;
						let wer = calendar.getOption("resourceAreaWidth") + totalChange;
						console.log("Resource area width: " + wer + "px");
						calendar.setOption("resourceAreaWidth", wer);
					}
				});

				instance.data.calendar = calendar;
				calendar.render();

				if (instance.data.extra) {
					window.instance.publishState("startdatesout", instance.data.calendar.view.activeStart);
					window.instance.publishState("enddatesout", instance.data.calendar.view.activeEnd);
				}
				calendarEl.addEventListener("click", function (e) {
					calendar.render();

					if (e.target.classList.contains("fc-more")) {
						return;
					}
					//instance.data.runDat()
					if (instance.data.extra) {
						window.instance.publishState("startdatesout", instance.data.calendar.view.activeStart);
						window.instance.publishState("enddatesout", instance.data.calendar.view.activeEnd);
					}
					if (e.target.classList.contains("fc-next-button") || e.target.classList.contains("fc-icon-chevron-right")) {
						if (instance.data.calendar.view.type == "dayGridMonth") {
							instance.triggerEvent("calendar_next_button_clicked");
						}
					} else if (e.target.classList.contains("fc-prev-button") || e.target.classList.contains("fc-icon-chevron-left")) {
						if (instance.data.calendar.view.type == "dayGridMonth") {
							instance.triggerEvent("calendar_prev_button_clicked");
						}
					}
				});
			}

			function getHeight() {
				if (typeof instance.data.height !== "undefined") {
					render();
				} else {
					setTimeout(() => {
						getHeight();
					}, 75);
				}
			}
			getHeight();
			instance.data.doneiniting = true;
		};
		instance.data.init();
	}

	var eventResources;
	var uniqueResourcesList;
	var resourceObject = [];
	var event_arr = [];
	var editable;

	instance.data.list = ["No Resource"];

	if (properties.eventresources !== null && properties.eventresources !== "undefined") {
		console.log("resources not null");
		instance.data.useresources = true;

		if (properties.specificresourcelist == null || properties.specificresourcelist == "undefined") {
			let ERL = properties.eventresources.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1").trim());
			instance.data.list = [...new Set(ERL)];
			console.log("17", instance.data.list);
		} else {
			let SR = properties.specificresourcelist.get(0, properties.specificresourcelist.length());
			if (SR.length == 0) {
				if (properties.eventresources != null) {
					instance.data.aretherespecificresources = false;
					instance.data.list = [
						...new Set(properties.eventresources.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1").trim())),
					];
					console.log("25", instance.data.list);
				} else {
					instance.data.aretherespecificresources = false;
					instance.data.list = ["No Resource"];
					console.log("31", instance.data.list);
				}
			} else {
				instance.data.list = properties.specificresourcelist.get(0, SR.length);
				console.log("37", instance.data.list);

				instance.data.aretherespecificresources = true;
				instance.data.resourceGroupList = properties.resourcegroups ? properties.resourcegroups.get(0, properties.resourcegroups.length()) : [];
				instance.data.resource_grp__prop_1 = properties.resource_grp__prop_1
					? properties.resource_grp__prop_1.get(0, properties.resource_grp__prop_1.length())
					: [];
				instance.data.resource_grp__prop_2 = properties.resource_grp__prop_2
					? properties.resource_grp__prop_2.get(0, properties.resource_grp__prop_2.length())
					: [];
			}
		}
	} else if (properties.eventresources !== null && properties.eventresources !== "undefined" && properties.specificresourcelist == null) {
		if (properties.specificresourcelist != null) {
			instance.data.aretherespecificresources = true;
			instance.data.list = properties.specificresourcelist.get(0, properties.specificresourcelist.length());
			console.log("50", instance.data.list);

			instance.data.resourceGroupList = properties.resourcegroups.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1").trim());
			instance.data.resource_grp__prop_1 = properties.resource_grp__prop_1
				.split(properties.unidelim)
				.map((item) => item.replace(/^\s*(.*)\s*$/, "$1").trim());
			instance.data.resource_grp__prop_2 = properties.resource_grp__prop_2
				.split(properties.unidelim)
				.map((item) => item.replace(/^\s*(.*)\s*$/, "$1").trim());
		} else {
			instance.data.aretherespecificresources = false;
			instance.data.list = ["No resource"];
			console.log("58", instance.data.list);
		}
	}

	//  console.log(instance.data.list)
	instance.data.tzid = properties.timezoneid;
	instance.data.height = properties.bubble.height();

	/// this sets up some of the custom CSS
	var a1 = document.createElement("style");
	a1.type = "text/css";
	a1.innerHTML = `.fc-axis.fc-widget-header { border: 0px !important; }
                     .fc-row.fc-widget-header {border: 0px !important;}
      .fc-divider { background-color: ${properties.dividercolor} !important;`;
	document.getElementsByTagName("head")[0].appendChild(a1);
	//$(".tooltip").tooltip("hide");

	///main rundDat function starts here.
	///This does the majority of the heavy lifting for getting data out and pushing the styling
	instance.data.runDat = function () {
		console.log("72");
		if (properties.autoheight) {
			instance.data.calendar.setOption("height", "auto");
		} else {
			instance.data.calendar.setOption("height", properties.bubble.height());
		}
		let calHeight = document.getElementById(instance.data.divid).offsetHeight;
		instance.setHeight(calHeight);

		let d = {
			"_p_Start of Range": moment(instance.data.calendar.view.activeStart).tz(properties.timezoneid).format(),
			"_p_End of Range": moment(instance.data.calendar.view.activeEnd).tz(properties.timezoneid).format(),
			"_p_Current Calendar View": instance.data.calendar.view.type,
			"_p_Event Array": JSON.stringify(instance.data.event_arr, null, 5),
		};
		instance.publishState("calendar_data", d);
		console.log("88");
		if (properties.daynames !== null && properties.daynames !== "undefined") {
			instance.data.calendar.setOption("columnHeaderHtml", function (date) {
				let dayNameMomentFormat = moment({
					month: date.getMonth(),
					day: date.getDate(),
				}).format(properties.momentjsformat);
				let daynames = properties.daynames.get(0, properties.daynames.length());
				switch (date.getDay()) {
					case 0:
						if (properties.include_date_with_day) {
							return daynames[0] + " " + dayNameMomentFormat;
						} else {
							return daynames[0];
						}
						break;
					case 1:
						if (properties.include_date_with_day) {
							return daynames[1] + " " + dayNameMomentFormat;
						} else {
							return daynames[1];
						}
						break;
					case 2:
						if (properties.include_date_with_day) {
							return daynames[2] + " " + dayNameMomentFormat;
						} else {
							return daynames[2];
						}
						break;
					case 3:
						if (properties.include_date_with_day) {
							return daynames[3] + " " + dayNameMomentFormat;
						} else {
							return daynames[3];
						}
						break;
					case 4:
						if (properties.include_date_with_day) {
							return daynames[4] + " " + dayNameMomentFormat;
						} else {
							return daynames[4];
						}
						break;
					case 5:
						if (properties.include_date_with_day) {
							return daynames[5] + " " + dayNameMomentFormat;
						} else {
							return daynames[5];
						}
						break;
					case 6:
						if (properties.include_date_with_day) {
							return daynames[6] + " " + dayNameMomentFormat;
						} else {
							return daynames[6];
						}
						break;
				}
			});
		} else if (instance.data.calendar.view.type.includes("Week")) {
			console.log("149");
			instance.data.calendar.setOption("columnHeaderHtml", function (date) {
				console.log("152");

				let today = moment().format("d");
				let comparison = moment({
					month: date.getMonth(),
					day: date.getDate(),
				}).format("d");
				if (today == comparison) {
					let dayNameMomentFormat = moment({
						month: date.getMonth(),
						day: date.getDate(),
					}).format(properties.momentjsformat);

					return `<div style="background-color: ${properties.event_background_color}; border-radius: 10%; color: darkgrey; display: table; font-size: 1em; height: 2em; margin: 0 auto; width: 80%;"><p style="display: table-cell; text-align: center; vertical-align: middle;">${dayNameMomentFormat}</p></div>`;
				} else {
					let dayNameMomentFormat = moment({
						month: date.getMonth(),
						day: date.getDate(),
					}).format(properties.momentjsformat);
					return `<div style="background-color: transparent; border-radius: 10%; color: black; display: table; font-size: 1em; height: 2em; margin: 0 auto; width: 80%;"><p style="display: table-cell; text-align: center; vertical-align: middle;">${dayNameMomentFormat}</p></div>`;
				}
			});
		} else if (
			instance.data.calendar.view.type.includes("Month") ||
			(instance.data.calendar.view.type.includes("Day") && !instance.data.calendar.view.type.includes("resourceTimeGridDay"))
		) {
			instance.data.calendar.setOption("columnHeaderHtml", function (date) {
				let dayNameMomentFormat = moment({
					month: date.getMonth(),
					day: date.getDate(),
				}).format(properties.momentjsformat);
				return dayNameMomentFormat;
			});
		}

		console.log("end of rundat");
	};
	console.log("179");
	instance.data.eventBackgroundColor = properties.event_background_color;
	console.log("one ehighty six");
	function rgba2hex(r) {
		var g;
		return (
			(rgb = r.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i)),
			(alpha = ((rgb && rgb[4]) || "").trim()),
			(hex = rgb ? (256 | rgb[1]).toString(16).slice(1) + (256 | rgb[2]).toString(16).slice(1) + (256 | rgb[3]).toString(16).slice(1) : r),
			(g = ((255 * (g = "" !== alpha ? alpha : 1)) | 256).toString(16).slice(1)),
			(hex += g),
			hex
		);
	}

	function toFixed(num, fixed) {
		var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
		if (!num) {
			return;
		} else {
			return num.toString().match(re)[0];
		}
	}

	function setTitleColor(bgColor, lightColor, darkColor) {
		var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
		var r = parseInt(color.substring(0, 2), 16); // hexToR
		var g = parseInt(color.substring(2, 4), 16); // hexToG
		var b = parseInt(color.substring(4, 6), 16); // hexToB
		var uicolors = [r / 255, g / 255, b / 255];
		var c = uicolors.map((col) => {
			if (col <= 0.03928) {
				return col / 12.92;
			}
			return Math.pow((col + 0.055) / 1.055, 2.4);
		});
		var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
		return L > 0.179 ? darkColor : lightColor;
	}

	function figureOutWhatToDo(bgColor) {
		if (bgColor == null || bgColor == "") {
			return;
		}
		if (bgColor.includes("rgb")) {
			return setTitleColor(rgba2hex(bgColor), lightColor, darkColor);
		} else {
			return setTitleColor(bgColor, lightColor, darkColor);
		}
	}

	function useLocations(index) {
		if (properties.event_location !== null && properties.event_location !== "undefined") {
			return event_location_arr[index];
		} else {
			return null;
		}
	}

	function useSummaries(index) {
		if (properties.event_summary !== null && properties.event_summary !== "undefined") {
			return event_summary_arr[index];
		} else {
			return null;
		}
	}

	function isEditable(editable) {
		if (properties.editableindividualortogether == "all of them together") {
			return properties.all_events_editable;
		} else {
			return editable;
		}
	}

	function useIdentfiers(index) {
		if (properties.whatami !== null && properties.whatami !== "undefined") {
			return event_whatami_arr[index];
		} else {
			return "I am a calendar event";
		}
	}

	function usePropOne(index) {
		if (properties.extra_property_1 !== null && properties.extra_property_1 !== "undefined") {
			return extra_property_1_arr[index];
		} else {
			return null;
		}
	}

	function usePropTwo(index) {
		if (properties.extra_property_2 !== null && properties.extra_property_2 !== "undefined") {
			return extra_property_2_arr[index];
		} else {
			return null;
		}
	}
	let runonce = 0;

	function useResources(index) {
		console.log(instance.data.useresources);
		if (instance.data.useresources == true && properties.eventresources) {
			let erl = properties.eventresources.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1").trim());
			if (index < erl.length) {
				return erl[index];
			} else {
				if (properties.assignresource == true) {
					return "No Resource";
				} else {
					return null;
				}
			}
		} else {
			return null;
		}
	}

	function amIEditable(index) {
		if (event_editable_arr[index] == "yes") {
			return true;
		} else {
			return false;
		}
	}
	//event font size
	var styleText = document.createElement("style");
	styleText.type = "text/css";
	styleText.innerHTML = `.fc-content{ font-size: ${properties.eventfontsize} }`;
	document.getElementsByTagName("head")[0].appendChild(styleText);

	function dynamicEventStaticColor(identifier, index) {
		if (properties.useeventspecificcolors) {
			switch (identifier) {
				case properties.event_type_1:
					return properties.ecolor1;
				case properties.event_type_2:
					return properties.ecolor2;
				case properties.event_type_3:
					return properties.ecolor3;
				case properties.event_type_4:
					return properties.ecolor4;
				case properties.event_type_5:
					return properties.ecolor5;
				case properties.event_type_6:
					return properties.ecolor6;
				default:
					return properties.default_color_based_on_identifier;
			}
		} else {
			return event_color_arr[index];
		}
	}

	function publishData() {
		if (instance.data.calendar) {
			if (properties.use_business_hours) {
				let we = properties.bdays_of_the_week.split(",").map((x) => {
					return parseInt(x);
				});
				instance.data.calendar.setOption("businessHours", {
					startTime: properties.bhours_start,
					endTime: properties.bhours_end,
					daysOfWeek: we,
				});
				var bc = document.createElement("style");
				bc.type = "text/css";
				bc.innerHTML = `.fc-nonbusiness{background-color: ${properties.nonbhours_color} !important} `;
				document.getElementsByTagName("head")[0].appendChild(bc);
			} else {
				instance.data.calendar.setOption("businessHours", false);
			}
			instance.data.calendar.setOption("titleFormat", properties.titleformatmomentjs);
			if (properties.check_me_if_you_want_to_use_me) {
				window.instance.publishState("startdatesout", instance.data.calendar.view.activeStart);
				window.instance.publishState("enddatesout", instance.data.calendar.view.activeEnd);
			}
			//get resources on the present calendar
			console.log("406");
			instance.data.calendar.getResources().map((x) => {
				x.remove();
			});

			console.log("411", instance.data.useresources, instance.data.list);
			//instance.data.useresources = true
			///add the list of resources to the calendar instance
			if (instance.data.useresources == true && instance.data.list[0] !== "No Resource") {
				console.log("400");
				instance.data.list.forEach((elm, i) => {
					if (elm.length >= 1) {
						let resourceObject = {};

						Object.assign(resourceObject, {
							id: elm,
							title: elm,
						});
						console.log("409");

						//if using specific resource list, add in these extra properties. group, prop 1, prop 2
						if (instance.data.aretherespecificresources) {
							if (properties.usegroups == true) {
								instance.data.calendar.setOption("resourceGroupField", "group");

								if (instance.data.resourceGroupList) {
									let tempGroup = instance.data.resourceGroupList[i] ? instance.data.resourceGroupList[i] : properties.nogroupname;
									Object.assign(resourceObject, {
										group: tempGroup,
									});
								}

								if (properties.resource_image_list) {
									let imgs = properties.resource_image_list.get(0, properties.resource_image_list.length());
									Object.assign(resourceObject, {
										img: "https:" + imgs[i],
									});
								}

								if (instance.data.resource_grp__prop_1) {
									let tempProp1 = instance.data.resource_grp__prop_1[i] ? instance.data.resource_grp__prop_1[i] : "";
									Object.assign(resourceObject, {
										prop1: tempProp1,
									});
								}
								if (instance.data.resource_grp__prop_2) {
									let tempProp2 = instance.data.resource_grp__prop_2[i] ? instance.data.resource_grp__prop_2[i] : "";
									Object.assign(resourceObject, {
										prop2: tempProp2,
									});
								}
							}
						} else {
							console.log("449");
							instance.data.calendar.setOption("resourceGroupField", false);
						}

						console.log("455", resourceObject);

						instance.data.calendar.addResource(resourceObject);
					}
				});
				if (properties.resourceorder !== null && properties.resourceorder !== "undefined") {
					instance.data.calendar.setOption("resourceOrder", properties.resourceorder);
				}
			} else {
				instance.data.calendar.addResource([]);
			}
			let imgCounter = 0;
			if (
				instance.data.useresources == true &&
				properties.resource_image_list &&
				instance.data.resourceGroupList &&
				properties.specificresourcelist.length() > 0
			) {
				console.log("still adding an image spot");
				instance.data.calendar.setOption("resourceRender", function (info) {
					var resourceimg = document.createElement("img");
					resourceimg.className = "resource-image";
					resourceimg.src = info.resource.extendedProps.img;
					resourceimg.loading = "lazy";
					resourceimg.style.width = "100px";
					resourceimg.style.height = "80px";
					var space = document.createElement("p");
					space.className = "resource-image-spacer";
					info.el.querySelector(".fc-cell-text").appendChild(space).appendChild(resourceimg);
				});
				instance.data.calendar.updateSize();
			} else {
				instance.data.calendar.setOption("resourceRender", function (info) {
					$(".resource-image").remove();
					$(".resource-image-spacer").remove();
				});
			}

			//set resource label text
			let resourceLabelText =
				properties.resourcelabeltext !== null && properties.resourcelabeltext !== "undefined" ? properties.resourcelabeltext : "Resources";

			let firstOfWeek = properties.first_day_of_the_week;
			if (firstOfWeek) {
				instance.data.calendar.setOption("firstDay", firstOfWeek);
				instance.data.calendar.firstDay = firstOfWeek;
			}
			instance.data.eventBackgroundColor = properties.event_background_color;

			if (event_arr !== "undefined") {
				instance.data.calendar.removeAllEvents();
				let EvRe = instance.data.calendar.getEventSources();
				EvRe.forEach((e) => {
					e.remove();
				});
				instance.data.calendar.addEventSource(event_arr);
			} else {
				if (instance.data.calendar.getEventSources().length >= 1) {
					instance.data.calendar.remove(instance.data.calendar.getEventSources()[0]);
				}
			}
			instance.data.calendar.setOption("resourceLabelText", resourceLabelText);
			instance.data.calendar.setOption("selectable", properties.allow_free_selection);
			instance.data.calendar.setOption("weekNumberCalculation", "local");
			instance.data.calendar.setOption("timeZone", properties.timezoneid);
			instance.data.calendar.setOption("allDaySlot", properties.alldayslot);
			instance.data.calendar.setOption("weekends", properties.weekends);
			instance.data.calendar.setOption("locale", properties.locale);
			//set time slot label format
			instance.data.calendar.setOption("slotLabelFormat", function (time) {
				let returnTime = moment(time.start.marker).subtract(time.start.timeZoneOffset, "minutes").tz(properties.timezoneid);

				if (returnTime.hour() >= 12) {
					return returnTime.format(properties.timeslotformat) + " " + properties.custompm;
				} else {
					return returnTime.format(properties.timeslotformat) + " " + properties.customam;
				}
			});

			if (properties.restrict_selection_to_business_hours_only) {
				let wo = properties.restricted_selection_days_of_week.split(",").map((x) => {
					return parseInt(x);
				});
				instance.data.calendar.setOption("selectConstraint", {
					startTime: properties.restricted_selection_start_time,
					endTime: properties.restricted_selection_end_time,
					daysOfWeek: wo,
				});
			}
			if (properties.restrict_dragresizing_to_business_hours_only) {
				let wk = properties.restricted_dragresizing_days_of_week.split(",");
				wk = wk.map((x) => {
					return parseInt(x);
				});
				instance.data.calendar.setOption("eventConstraint", {
					startTime: properties.restricted_dragresizing_start_time,
					endTime: properties.restricted_dragresizing_end_time,
					daysOfWeek: wk,
				});
			}
			instance.data.calendar.rerenderEvents();
			if (properties.show_header == true) {
				let buttons = `${properties.leftbutton},${properties.middlebutton},${properties.rightbutton}`;
				instance.data.calendar.setOption("header", {
					left: "prev,next today",
					center: "title",
					right: buttons,
				});
			} else {
				instance.data.calendar.setOption("header", false);
			}

			//  $(function() {
			//    $('[data-toggle="tooltip"]').tooltip()
			// })
			instance.data.calendar.setOption("height", instance.data.height);
			if (!instance.data.resize) {
				let aaaa = document.getElementById(instance.data.divid);
				instance.setHeight(aaaa.offsetHeight);
			}
			instance.data.calendar.setOption("eventTimeFormat", {
				hour: properties.event_hour,
				minute: properties.event_minute,
				omitZeroMinute: properties.omit0minute,
				meridiem: properties.meridiem,
				hour12: properties.hour12,
			});
			instance.data.calendar.setOption("snapDuration", properties.snapduration);

			instance.data.runDat();
			instance.data.calendar.setOption("filterResourcesWithEvents", properties.filterresourceview);
		} else {
			setTimeout(function () {
				publishData();
			}, 150);
		}
	}

	if (properties.start_list && properties.end_list && properties.unique_id_list) {
		var lightColor = properties.lightcolor;
		var darkColor = properties.darkcolor;
		var event_start = properties.start_list;
		var event_end = properties.end_list;
		var event_title = properties.title_list;
		var event_id = properties.unique_id_list;
		var event_editable = properties.editable;
		var event_whatami = properties.whatami;
		var event_summary = properties.event_summary;
		var event_location = properties.event_location;
		var extra_property_1 = properties.extra_property_1;
		var extra_property_2 = properties.extra_property_2;
		var event_color = properties.color_list;

		if (properties.whatami !== null && properties.whatami !== "undefined") {
			var event_whatami_arr = event_whatami.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		}

		if (event_start) {
			var event_start_arr = event_start.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		} else {
			console.warn("Property start list in action create calendar is null");
			return;
		}
		if (event_end) {
			var event_end_arr = event_end.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		} else {
			console.warn("Property end list in action create calendar is null");
			return;
		}
		if (properties.editableindividualortogether == "each discrete event") {
			var event_editable_arr = event_editable.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		} else {
			var event_editable_arr = event_start_arr.map((x) => {
				return properties.all_events_editable;
			});
		}
		if (event_title) {
			var event_title_arr = event_title.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		} else {
			console.warn("you really need to use titles. if therres enough request i can make it optional");
		}

		if (properties.event_summary !== null && properties.event_summary !== "undefined") {
			var event_summary_arr = event_summary.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		}

		if (properties.event_location !== null && properties.event_location !== "undefined") {
			var event_location_arr = event_location.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		}

		if (event_id) {
			var event_id_arr = event_id.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		} else {
			console.warn("Property id list in action create calendar is null");
			return;
		}
		if (properties.color_list) {
			var event_color_arr = event_color.split("~").map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		} else {
			var eventcolorstring = "";
			for (let i = 0; i < event_id.length; i++) {
				if (i == 0) {
					eventcolorstring = eventcolorstring.concat(properties.defaulteventcolor);
				} else {
					eventcolorstring = eventcolorstring.concat("~" + properties.defaulteventcolor);
				}
			}
			var event_color_arr = eventcolorstring.split("~");
		}
		if (properties.extra_property_1 !== null && properties.extra_property_1 !== "undefined") {
			var extra_property_1_arr = extra_property_1.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		}

		console.log(706, properties.extra_property_2);
		if (properties.extra_property_2 !== null && properties.extra_property_2 !== "undefined") {
			var extra_property_2_arr = extra_property_2.split(properties.unidelim).map((item) => item.replace(/^\s*(.*)\s*$/, "$1"));
		}

		if (properties.bordercolorlist !== null) {
			if (properties.bordercolorlist.includes("~")) {
				var eventBorderColorList = properties.bordercolorlist.split("~");
			} else {
				var eventBorderColorList = properties.bordercolorlist;
			}
		}

		function checkForBorderColor(a, i) {
			if (eventBorderColorList !== null || eventBorderColorList !== "undefined") {
				if (typeof eventBorderColorList === "string") {
					return eventBorderColorList;
				} else {
					return eventBorderColorList[i];
				}
			} else {
				return a;
			}
		}

		//create events
		event_arr = event_title_arr.map(function (item, index, array) {
			if (event_editable_arr[index] == "yes") {
				editable = true;
			} else {
				editable = false;
			}
			var DateTime = luxon.DateTime;
			var tempDuration = Math.abs(Date.parse(event_end_arr[index]) - Date.parse(event_start_arr[index]));
			var minutesDuration = tempDuration / 60000;
			minutesDuration = toFixed(minutesDuration, 3);
			var hoursDuration = minutesDuration / 60;
			hoursDuration = toFixed(hoursDuration, 3);
			return {
				// 'overlap':false,
				title: event_title_arr[index],
				start: event_start_arr[index],
				end: (event_end_arr[index] =="")? event_start_arr[index] : event_end_arr[index],
				id: event_id_arr[index],
				backgroundColor: dynamicEventStaticColor(useIdentfiers(index), index),
				borderColor: checkForBorderColor(dynamicEventStaticColor(useIdentfiers(index), index), index),
				textColor: figureOutWhatToDo(event_color_arr[index]),
				editable: isEditable(editable),
				extendedProps: {
					whatAmI: useIdentfiers(index),
					eventSummary: useSummaries(index),
					eventLocation: useLocations(index),
					eventDurationMinutes: minutesDuration,
					eventDurationHours: hoursDuration,
					extraProperty1: usePropOne(index),
					extraProperty2: usePropTwo(index),
				},
				resourceId: useResources(index),
			};
		});
		instance.data.event_arr = event_arr;

		instance.data.extra = properties.check_me_if_you_want_to_use_me;
		publishData();
	} else {
		instance.data.event_arr = [{ title: "", start: "", end: "", id: "" }];
		instance.data.extra = properties.check_me_if_you_want_to_use_me;

		publishData();
		// console.warn('some of your data may not be ready yet')
		//return
	}
}
