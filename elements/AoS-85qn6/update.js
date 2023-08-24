function(instance, properties, context) {
  let ranges=[]

if (properties.starts && properties.ends){
    console.log('yes')
 ranges = properties.starts.get(0,properties.starts.length()).map((e,i) =>{
     console.log([e,properties.ends.get(0,properties.ends.length())[i]])
      return [e,properties.ends.get(0,properties.ends.length())[i]]
  })
}
    
 instance.publishState('ranges_out', ranges)
}