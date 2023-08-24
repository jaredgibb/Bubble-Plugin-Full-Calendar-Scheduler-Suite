function(instance, context) {
    
function appendScript(filepath) {
    if ($('head script[src="' + filepath + '"]').length > 0)
        return;

    var ele = document.createElement('script');
    ele.setAttribute("type", "text/javascript");
    ele.setAttribute("src", filepath);
    $('head').append(ele);
    console.log(moment())
}
    appendScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js')

    
    
 var div;
  var uniqueid = 'dp'+(Math.random() * Math.pow(2, 54)).toString(18);
  div = $('<div><input type="text" id="'+uniqueid+'" placeholder=""/></div>');

  //default style. the child input will inherit these styles from the div
  div.css("width", "100%");
  div.css("height", "100%");
  div.css("cursor", "pointer");
  //div.css("border", "1px solid rgb(189, 189, 189)");
  //div.css("border-radius", "3px");
  div.css("transition", "border-color 200ms ease, box-shadow 200ms ease");
  //div.css("col","rgb(85, 85, 85)");
  div.css("padding","1px 4px");
  //div.css("box-sizing", "border-box");
  instance.canvas.append(div);
  
  instance.data.div = div;
  instance.data.uniqueid = uniqueid;
  instance.data.first_time = true;
  instance.data.prevDates = null;
  instance.data.prev = [];
    
  instance.publishState('value', null);
  instance.publishState('valuelist',null);  
  instance.publishState('range',null);
}