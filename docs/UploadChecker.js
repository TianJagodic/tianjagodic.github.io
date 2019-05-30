function checkIfLoggedIn() {
    if (document.getElementById("logInText").textContent == "LOGIN") {
        console.log("The user is not logged in!");
        document.getElementById("dragAndDrop").hidden = true;
        document.getElementById("plsLogIn").innerText = "You are not logged in! Please log in!";
    }
    else
        console.log("The user is logged in!");
}
checkIfLoggedIn();
