function(properties, context) {

var url = `https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code&scope=${properties.scopes}&client_id=${properties.clientid}&redirect_uri=${properties.redirecturi}`;
    if (properties.state){
        url.concat(`&state=${properties.state}`)
    }
var win = window.open(url, "_self");
win.focus();


}