"use strict";

document.getElementById("educationHeading")?.addEventListener("click", () => {showHideRow('education');});

function showHideRow(row) {

	if (document.getElementById(row)!.style.display == "none") {
		
		document.getElementById(row)!.style.display="block";
	} else {
		document.getElementById(row)!.style.display="none";
	}

	console.log(row);

}


