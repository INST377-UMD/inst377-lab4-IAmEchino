
function changeColor() {
    const royalblue = rgb(65, 105, 225)
    // Get the computed background color of the body element
    var backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    console.log(backgroundColor);

    // if (document.body.style.backgroundColor == "black") {
    //     document.body.style.backgroundColor = "royalblue";
    // } else if (document.body.style.backgroundColor == "royalblue") {
    //     document.body.style.backgroundColor = "black";
    // }
}
