"use strict";
var _a;
(_a = document.getElementById("educationHeading")) === null || _a === void 0 ? void 0 : _a.addEventListener("mousedown", function () { showHideRow('education'); });
function showHideRow(row) {
    if (document.getElementById(row).style.display == "none") {
        document.getElementById(row).style.display = "block";
    }
    else {
        document.getElementById(row).style.display = "none";
    }
    console.log(row);
}
