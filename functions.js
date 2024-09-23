function changeColor() {

    console.log(document.body.style.backgroundColor);

    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'royalblue';
        document.getElementById("titleText").style.color = 'black'
    } else {
        document.body.style.backgroundColor = 'black';
        document.getElementById("titleText").style.color = 'royalblue'
    }
}


function alertName() {
    let name = document.nameForm.nameBox.value;
    alert("Hi " + name + "!");
}

function addText() {
    let title = document.getElementById("titleText");
    title.innerHTML += ' - Add Text';
}

function validateText() {
    let text = document.textForm.textBox.value;
    const validationRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validationRegex.test(text)) {
        alert("How about...nah :)")
        return false
    }
}