
var loginContainer = document.getElementById("login-container");
var newU = document.createElement("p");
var newP = document.createElement("p");
var newItemFirst = document.createElement("span");
var newItemSecond = document.createElement("span");
loginContainer.append(newU, newP);

loginContainer.addEventListener("submit", function (e) {

    var username = document.getElementById("username").value;
    document.getElementById("username").style.border = "thick solid red";

    var password = document.getElementById("password").value;
    document.getElementById("password").style.border = "thick solid red";


    newItemFirst.setAttribute("id", "error");
    document.getElementsByTagName("div")[1].append(newItemFirst);
    document.getElementsByTagName("div")[1].style.cssText = "position:relative";
    document.getElementById("error").style.cssText = "top:42px; right:10px";
    newItemFirst.setAttribute("class", "fas fa-times fa-2x text-danger position-absolute");

    newItemSecond.setAttribute("id", "errorS");
    document.getElementsByTagName("div")[2].append(newItemSecond);
    document.getElementsByTagName("div")[2].style.cssText = "position:relative";
    document.getElementById("errorS").style.cssText = "top:42px; right:10px";
    newItemSecond.setAttribute("class", "fas fa-times fa-2x text-danger position-absolute");
    e.preventDefault();

    if (username === "") {
        newU.innerHTML = "* Please, enter username!";
    } else {
        if (username !== "new_user") {
            newU.innerHTML = "* Please, enter valid username!";
        } else {
            document.getElementById("username").style.border = "thick solid green";
            newItemFirst.classList.replace("text-danger","text-success");
            newItemFirst.classList.replace("fa-times","fa-check");
            newU.innerHTML = "";
        }
    }
    if (password === "") {
        newP.innerHTML = "* Please, enter password!";
    } else {
        if (password !== "12345678") {
            newP.innerHTML = "* Please, enter valid password!";
        } else {
            document.getElementById("password").style.border = "thick solid green";
            newItemSecond.classList.replace("text-danger","text-success");
            newItemSecond.classList.replace("fa-times","fa-check");
            newP.innerHTML = "";
        }
    }
    if (username === "new_user" && password === "12345678") {
        newP.innerHTML = "Successful login!";
    }
});