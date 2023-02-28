"use strict";

var headings = document.querySelectorAll(".heading");
console.log(headings);

for (const h of headings) {
    h.addEventListener("mousedown", function () { toggleRow(h); });
}

//document.getElementById("educationHeading").addEventListener("mousedown", function () { showHideRow('education'); });
function toggleRow(row) {

    const rowToToggle = row.id.substring(0, row.id.length - 7)

    if (document.getElementById(rowToToggle).style.display == "none") {
        document.getElementById(rowToToggle).style.display = "block";
    }
    else {
        document.getElementById(rowToToggle).style.display = "none";
    }
    console.log(row);
}
