function(properties, context) {
    if(properties.initialdates){
        return properties.initialdates.get(0, 1000000);
    }
}