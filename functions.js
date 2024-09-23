
// function changeColor() {
//     alert("TEST!")
//     // const royalblue = "rgb(65, 105, 225)"
//     // var backgroundColor = window.getComputedStyle(document.body).backgroundColor;
//     // console.log(backgroundColor);

//     if (document.body.style.backgroundColor == "black") {
//         document.body.style.backgroundColor = "royalblue";
//     }
//     if (document.body.style.backgroundColor == "royalblue") {
//         document.body.style.backgroundColor = "black";
//     }
// }



function changeColor() {
    const royalblue = rgb(65, 105, 225)
    const black = rgb(0, 0, 0)

    // Get the computed background color of the body element
    var backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    console.log(window.getComputedStyle(document.body).backgroundColor);

    

    if (window.getComputedStyle(document.body).backgroundColor == black) {
        document.body.style.backgroundColor = royalblue;
    }
    if (window.getComputedStyle(document.body).backgroundColor == royalblue) {
        document.body.style.backgroundColor = black;
    }
}
