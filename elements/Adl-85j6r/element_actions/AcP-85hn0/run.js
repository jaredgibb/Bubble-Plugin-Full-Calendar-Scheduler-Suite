function(instance, properties, context) {
 var datepicker = instance.data.datepicker;
 if(datepicker != null){
  datepicker.clear();
  instance.publishState('range', null);
  instance.publishState('valuelist',null); 
  instance.publishState('value',null);    
 }
 //instance.publishState('')
}