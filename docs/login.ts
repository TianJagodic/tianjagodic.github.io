var GotCorrectName = false;
var GotCorrectPass = false;

let names: string[];
let passes: string[];


class Globals{
    static IsLoggedIn : boolean = false;
}


function getName(inputName : string, inputPass : string){
    if(inputName != null && inputPass != null){
        if(names.indexOf(inputName) == passes.indexOf(inputPass)){
            GotCorrectName = true;
        }
        else{
            GotCorrectName = false;
        }
    }
    else {
        GotCorrectName = false;
    }

}


function CollectData(){
    console.log("We got a click");
    getName((<HTMLInputElement>document.getElementById("nameInput")).value,(<HTMLInputElement>document.getElementById("passInput")).value);

    if(GotCorrectName && GotCorrectPass){
        document.getElementById("error").innerText = "We gucci";
        document.getElementById("loginText").innerText = (<HTMLInputElement>document.getElementById("nameInput")).value;
        Globals.IsLoggedIn = true;
        window.location.href = "upload.html";
    }
    else{
        document.getElementById("error").innerText = "Login Error";
    }
}

console.log("login.js init");
document.getElementById("LoginButton").onclick = CollectData;



db.collection('users').get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        names.append(doc.data().name);
        passes.append(doc.data().password);
    });
    //console.log(names);
});

