"use strict";

var headings = document.querySelectorAll(".heading");
console.log(headings);

for (const h of headings) {
    h.addEventListener("mousedown", () => {
        toggleRow(h);
    });
    toggleRow(h);
}

//document.getElementById("educationHeading").addEventListener("mousedown", function () { showHideRow('education'); });
function toggleRow(source) {

    const headingText = source.id;
   
    const elementToToggle = document.getElementById(source.id.substring(0, source.id.length - 7));

    if (elementToToggle.style.display == "none") {
        elementToToggle.style.display = "block";
        //source.innerHTML = "<h2>&#709; " + elementToToggle.id + "</h2>";
        } else {
        elementToToggle.style.display = "none";
        //source.innerHTML = "<h2>> " + elementToToggle.id + "</h2>";
    }
    
}
