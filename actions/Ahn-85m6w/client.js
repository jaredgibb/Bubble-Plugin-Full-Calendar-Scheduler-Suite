function(properties, context) {

var url = `https://login.microsoftonline.com/${properties.tenant}/oauth2/v2.0/authorize?client_id=${properties.clientid}&response_type=code&redirect_uri=${properties.redirecturi}&response_mode=query&scope=${properties.scope}&state=${properties.state}`;
var win = window.open(url, "_self");
win.focus();


}