(function(){
    "strict";
    console.log("running js");

    const screen1=document.querySelector("#screen1");
    const screen2=document.querySelector("#screen2");
    const screen3=document.querySelector("screen3");
    const thePrelude=document.querySelector("#thePrelude");
    const theResult=document.querySelector("#theResult");
    const button1=document.querySelector("#button1");
    const button2=document.querySelector("#button2");
    const button3=document.querySelector("#button3");


    prebutton.addEventListener("click", function(event){
        document.getElementById("thePrelude").className="hidden";
        document.getElementById("myForm").className="showing";
        document.getElementById("screen1").className="showing";
    });
   
    button1.addEventListener("click", function(event){
        event.preventDefault();
        const yourName=document.querySelector("#yourName").value;
        const time=document.querySelector("#time").value;
        const location=document.querySelector("#location").value;

        document.getElementById("screen1").className="hidden";
        document.getElementById("screen2").className="showing";  
    });

    button2.addEventListener("click", function(event){
        event.preventDefault();
        const activity=document.querySelector("#activity").value;
        const adverb=document.querySelector("#activity").value;
        const weapon=document.querySelector("#weapon").value;

        document.getElementById("screen2").className="hidden";
        document.getElementById("screen3").className="showing";

    });

    button3.addEventListener("click", function(event){
        event.preventDefault();
        const duration=document.querySelector("#duration").value;
        const disposal=document.querySelector("#disposal").value;
        const discovery=document.querySelector("#discovery").value;

        document.getElementById("screen3").className="hidden";
        document.getElementById("theResult").className="showing";
        document.getElementById("myForm").className="hidden";
    });
})();