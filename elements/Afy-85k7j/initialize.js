function(instance, context) {
instance.data.init = false
function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 
    instance.data.divid = 'time'+Math.trunc(randomNumber(100,99999))
    
    
    
    function appendScript(filepath) {
    if ($('head script[src="' + filepath + '"]').length > 0)
        return;

    var ele = document.createElement('script');
    ele.setAttribute("type", "text/javascript");
    ele.setAttribute("src", filepath);
    $('head').append(ele);
    console.log(moment())
}
    
    appendScript('https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.6.9/flatpickr.min.js')
}