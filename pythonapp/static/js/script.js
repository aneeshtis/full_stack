function getService(){
    location.href = "/service/";
}

function register(){
    var name = document.getElementById('name').value;
    var uname = document.getElementById('uname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var dob = document.getElementById('dob').value;
    var gender;
    var place = document.getElementById('place').value;
    var district = document.getElementById('district').value;
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;

    if(name.match(/[a-zA-z]{3,50}/) && name.trim() != ''){
    }else{
        alert("Enter a valid Name!!");
        return;
    }

    if(uname.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/) && uname.trim() != ''){
    }else{
        alert("Enter a valid Username! It must contain atleast four characters!!");
        return;
    }

    if(email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) && email.trim() != ''){
    }else{
        alert("Enter a valid Email!!");
        return;
    }

    if(mobile.match(/[5-9]{1}[0-9]{9}/) && mobile.trim() != ''){
    }else{
        alert("Enter a valid Mobile Number!!");
        return;
    }

    if(dob.trim() != ''){
    }else{
        alert("Enter a valid DOB!!");
        return;
    }

    if(document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    }

    if(document.getElementById('female').checked){
        gender = document.getElementById('female').value;
    }

    if(place.match(/[a-zA-z]{3,50}/) && place.trim() != ''){
    }else{
        alert("Enter a valid Place!!");
        return;
    }

    if(district == 0){
        alert("Please select your district!!");
        return;
    }

    if(pwd != cpwd){
        alert("Password and confirm password do not match!!");
        return;
    }

    if(pwd.match(/(?=.*\d)(?=.*[a-z]).{6,}/) && pwd.trim() != ''){
    }else{
        alert("Password must contain at least one number and one lowercase letter, and at least 6 or more characters!!");
        return;
    }

    alert("Thanks For Registering With Us!!");
    location.href = "/service/";
}