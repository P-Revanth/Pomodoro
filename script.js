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
        localStorage.setItem("name", name.value);
        location.href = "home.html";
        return true;
    }
}

let wish = document.getElementById("wish");
wish.textContent = "Good ";
let time = new Date().getHours();
if ((time > 0) && (time < 12)) {
    wish.textContent = wish.textContent + "Morning";
}
else if ((time >= 12) && (time < 16)) {
    wish.textContent = wish.textContent + "Afternoon";
}
else if ((time >= 16) && (time < 19)) {
    wish.textContent = wish.textContent + "Evening";
}
else {
    wish.textContent = wish.textContent + "Night";
}

let name_input = document.getElementById("input-name");
wish.textContent = wish.textContent + ", " + localStorage.getItem("name");
// function menu_Icon(x){
//     x.classList.toggle("change");
// }