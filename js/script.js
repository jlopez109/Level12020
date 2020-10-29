
let buttons = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe");
// run through a loop 
//add an event listener

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        alert("you clicked on " + e.target.innerText);
        //this.remove(); 
        //  if(e.target.innerText == "Danger"){ ///changes text to danger and only that button
        //     changeMe.innerText= "danger";
        // }

        changingText(e.target.innerText);
        //changeMe.innerText = e.target.innerText; 
    });
}

function changingText(textToChange) {
    //only works if you want buttons to do similar task
    changeMe.innerText = textToChange;      // this changes text when you click any button btn to the location changeMe
    //reset our css here
    changeMe.classList = "";
    switch (textToChange) {
        case "Primary":
            changeMe.classList.add("blue"); //can add li instead
            break;
        case "Secondary":
            changeMe.classList.add("grey");
            break;
        case "Success":
            changeMe.classList.add("green");
            break;
        case "Danger":
            changeMe.classList.add("red")
            break;
        case "Warning":
            changeMe.classList.add("yellow")
            break;
    }

}

//hugo code
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function(e){
//         changeMe.innerHTML = e.target.innerHTML;
//         changeMe.className = this.className;
//     });
// }// end of loop



