function(instance, properties) {
    let el = $('<div><img src = "//dd7tel2830j4w.cloudfront.net/f1566986379782x248699124458819260/pluginlogo.png"></div>');
    instance.canvas.append(el);
    el.css('background-color','cyan');
    el.css('opacity',0.5);
    el.css('position','absolute');
    el.css('height',properties.bubble.height);
    el.css('width',properties.bubble.width);
    
   
}