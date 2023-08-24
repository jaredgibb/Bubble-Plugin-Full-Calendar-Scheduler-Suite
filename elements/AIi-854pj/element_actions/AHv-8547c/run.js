function(instance,properties,context){
    

    if (!window.savedStyles) window.savedStyles = {};
const id = properties.id;
if (!id) return;
const selector = "#" + id;
if (!window.savedStyles[id]) {
    window.savedStyles[id] = { animation: undefined, styles: $(selector).attr("style") };
}
function sizes() {
    let contentWidth = [...document.body.children].reduce((a, el) => Math.max(a, el.getBoundingClientRect().right), 0) - document.body.getBoundingClientRect().x;
    return Math.min(document.body.scrollWidth, contentWidth);
}
var x;
const width = sizes();
let v1 = $(selector).width() + properties.x;
if (v1 > width) {
    let difference = v1 - width;
    let newx = properties.x - difference;
    x = newx;
} else {
    x = properties.x;
}
const timeMs = properties.time_to_move;
const y = properties.y;
document.getElementById(id).style.zIndex = "999999";
$(selector).offset({ top: y, left: x });

    
    
   
    
 if (!instance.data.runonce){
         var specifiedElement = document.getElementById(id);
document.addEventListener('click', function(event) {
    setTimeout(function(){ 
    	  var isClickInside = specifiedElement.contains(event.target);

 		 if (!isClickInside) {
			instance.triggerEvent('body_clicked_outside_of_moveable_group') }
		});
     instance.data.runonce = true
    }, 150);

 }


}