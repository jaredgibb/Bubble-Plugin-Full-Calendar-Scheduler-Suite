function(instance, context) {

window['instance'] = instance
    

document.addEventListener('visibilitychange', function(){
   instance.publishState('visibility', document.visibilityState);
});
}