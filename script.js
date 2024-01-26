

const codecontainer = document.querySelector(".code-container")
const inputNumber = 6;
let lastelmentt = null;



function oninput(event) {
    // console.log(event.target)
    const currentElement = event.target;
    lastelmentt = currentElement;
    if(currentElement.value){
        currentElement.nextElementSibling && currentElement.nextElementSibling.focus()
    }
}




function onbackkey (e) {
    if (e.key ==="Enter") {
        currentElement.nextElementSibling && currentElement.nextElementSibling.focus()
    } else if (e.key === "Backspace") {
        currentElement = "";
        currentElement.previousElementSibling && currentElement.previousElementSibling.focus()
    }
}


function onfocus(event) {
    event.target.placeholder = "";
}

function onblur(event) {
    event.target.placeholder = "0";
}


for (let i = 0; i < inputNumber; i++) {
    const input = document.createElement("input");
    input.className = "code"
    input.maxLength = 1;
    input.placeholder = "0";
    input.addEventListener("focus", onfocus)
    input.addEventListener("blur", onblur)
    input.addEventListener("input", oninput)
    input.addEventListener("keyUp", onbackkey)
    codecontainer.appendChild(input)
    
}



document.addEventListener('keyup', (e) => {
    console.log("keyup", e);
    if (e.key === "Backspace") {
        lastelmentt.value = "";
        lastelmentt.previousElementSibling && lastelmentt.previousElementSibling.focus();
    }
});