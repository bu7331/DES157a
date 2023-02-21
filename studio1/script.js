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
    const result1=document.querySelector("#result1");
    const result2=document.querySelector("#result2");
    const result3=document.querySelector("#result3");


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

        const fill1= `${yourName} was targeted by the mafia at ${time} at ${location}`;
        result1.innerHTML=fill1;

        document.getElementById("screen1").className="hidden";
        document.getElementById("screen2").className="showing";  

    });

    button2.addEventListener("click", function(event){
        event.preventDefault();
        const activity=document.querySelector("#activity").value;
        const adverb=document.querySelector("#activity").value;
        const weapon=document.querySelector("#weapon").value;
        const fill2= `They were ${activity} when the mafia ${adverb} pulled out a ${weapon} to make the kill`;

        result2.innerHTML=fill2;

        document.getElementById("screen2").className="hidden";
        document.getElementById("screen3").className="showing";

    });

    button3.addEventListener("click", function(event){
        event.preventDefault();
        const duration=document.querySelector("#duration").value;
        const disposal=document.querySelector("#disposal").value;
        const discovery=document.querySelector("#discovery").value;
        const fill3=`The mafia killed their target in ${duration} and disposed the body in a ${disposal} were it was discovered the following morning by ${discovery}`;

        result3.innerHTML=fill3;

        document.getElementById("screen3").className="hidden";
        document.getElementById("theResult").className="showing";
        document.getElementById("myForm").className="hidden";
    });
})();