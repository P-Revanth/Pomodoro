function check_Name() {
    let name = document.getElementById("input-name");
    let regex = /^[A-Za-z]{3,}$/;
    let error = document.getElementById("error");
    if (!(regex.test(name.value))) {
        error.textContent = "*Invalid: Enter a valid username(At least 3 alphabets long).";
        error.style.color = "red";
        return false;
    }
    else {
        error.textContent = "";
        location.replace("home.html");
        return true;
    }
}

// function menu_Icon(x){
//     x.classList.toggle("change");
// }

function openNavBar(){
    
}