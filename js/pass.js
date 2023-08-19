// for the input
let numGrid = document.getElementById("numGrid");

// for the display
let displayTag = document.getElementById("displayCont");
// add event listener
numGrid.addEventListener("click", function () {
    // alert('Button clicked');
    displayTag.textContent = numGrid.value;
})



// let numGrid = document.getElementById('numGrid');
// numGrid.addEventListener('click', function () {
//     alert('Button clicked');
// })
