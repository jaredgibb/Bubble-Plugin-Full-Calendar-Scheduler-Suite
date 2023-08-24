function(instance, properties, context) {
 var datepicker = instance.data.datepicker;
 
    if(datepicker != null){
     if(properties.thedate!=null){
     	datepicker.selectDate(properties.thedate);
        instance.publishState('value',properties.thedate);
        instance.publishState('valuelist',[properties.thedate]);
     	//instance.publishState('range',[c]);
      }
     else{
       datepicker.clear();
       instance.publishState('range', null);
  	   instance.publishState('valuelist',null); 
       instance.publishState('value',null);  
       //console.log('state'typeof instance.publishState([C]));
     }
     
 }

}