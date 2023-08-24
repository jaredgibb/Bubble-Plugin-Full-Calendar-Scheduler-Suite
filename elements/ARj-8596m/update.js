function(instance, properties, context) {
    



  const options = Intl.DateTimeFormat().resolvedOptions();
  instance.publishState("browser_locale", options.locale);
  instance.publishState("browser_time_zone", options.timeZone);    

//# sourceURL=PLUGIN_TopCal---Dates-
}