// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function () {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

console.log("hfgdrgsx");

const closeModal2 = () => {
    modal2.style.display = "none";
}



const popoverToggle = document.getElementById("popoverToggle");
const popupcont = document.getElementById("popup-cont");

const changeStyle = () => {
    // Get the current opacity value
    const currentOpacity = parseFloat(window.getComputedStyle(popupcont).opacity);

    // Toggle the opacity
    if (currentOpacity === 0) {
        popupcont.style.opacity = "1"; // If opacity is 0, set it to 1 (100%)
    } else {
        popupcont.style.opacity = "0"; // If opacity is 1, set it to 0 (0%)
    }
}

popoverToggle.addEventListener("click", changeStyle);
