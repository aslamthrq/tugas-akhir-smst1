var attempt = 3; 
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "coba" && password == "cobaja"){
alert ("Login successfully");
window.location = "home.html"; 
return false;
}
else{
attempt --;
alert("Kamu mengosongkan "+attempt+" kolom, masukan yang benar!");

if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}