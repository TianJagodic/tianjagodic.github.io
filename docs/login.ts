var GotCorrectName = false;
var GotCorrectPass = false;

function getName(input : String){
    if(input != null){
        if(input == "Titan"){
            GotCorrectName = true;
        }
        else{
            GotCorrectName = false;
            console.log("name:" + input);
        }
    }
    else {
        GotCorrectName = false;
    }

}

function getPass(input : String){
    if(input != null){
        if(input =="hello"){
            console.log("pass:" + input);
            GotCorrectPass = true;
        }
        else{
            GotCorrectPass = false;
            console.log(input);
        }
    }
    else{
        GotCorrectPass = false;
        console.log(input);
    }
}

function CollectData(){
    console.log("We got a click");
    getName((<HTMLInputElement>document.getElementById("nameInput")).value);
    getPass((<HTMLInputElement>document.getElementById("passInput")).value);

    if(GotCorrectName && GotCorrectPass){
        document.getElementById("error").innerText = "We gucci";
        document.getElementById("loginText").innerText = (<HTMLInputElement>document.getElementById("nameInput")).value;
    }
    else{
        document.getElementById("error").innerText = "Login Error";
    }
}

console.log("login.js init");
document.getElementById("LoginButton").onclick = CollectData;



