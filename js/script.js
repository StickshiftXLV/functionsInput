function welcomeUser() {    
    let user = document.getElementById("name").value;

    
if(user == ""){
    document.getElementById("message").textContent = "Please enter name";
}
 else{


      document.getElementById("message").textContent = "Welcome " + user
}

}



function clearUser(){
    document.getElementById("name").value  = "" ;

    document.getElementById("message").textContent = "";
}