function welcomeUser() {    
    let userName = document.getElementById("name").value;
if(userName = ""){
    document.getElementById("message").textContent = "please enter your username ";
}
 else{
       document.getElementById("message").textContent = "Welcome " + userName;
}

}
function clearUser(){
    document.getElementById("name").value  = "" ;

    document.getElementById("message").textContent = "";
}