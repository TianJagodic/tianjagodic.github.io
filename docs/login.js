var GotCorrectName = false;
var GotCorrectPass = false;
var names;
var passes;
var Globals = /** @class */ (function () {
    function Globals() {
    }
    Globals.IsLoggedIn = false;
    return Globals;
}());
function getName(inputName, inputPass) {
    if (inputName != null && inputPass != null) {
        if (names.indexOf(inputName) == passes.indexOf(inputPass)) {
            GotCorrectName = true;
        }
        else {
            GotCorrectName = false;
        }
    }
    else {
        GotCorrectName = false;
    }
}
function CollectData() {
    console.log("We got a click");
    getName(document.getElementById("nameInput").value, document.getElementById("passInput").value);
    if (GotCorrectName && GotCorrectPass) {
        document.getElementById("error").innerText = "We gucci";
        document.getElementById("loginText").innerText = document.getElementById("nameInput").value;
        Globals.IsLoggedIn = true;
        window.location.href = "upload.html";
    }
    else {
        document.getElementById("error").innerText = "Login Error";
    }
}
console.log("login.js init");
document.getElementById("LoginButton").onclick = CollectData;
db.collection('users').get().then(function (snapshot) {
    console.log(snapshot.docs);
    snapshot.docs.forEach(function (doc) {
        names.append(doc.data().name);
        passes.append(doc.data().password);
    });
    //console.log(names);
});
