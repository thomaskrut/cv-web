function mouseOver(element) {
	element.innerHTML=element.innerHTML + " bajs";
}

function showHideRow(row) {

	if (document.getElementById(row).style.display=="none") {
		document.getElementById(row).style.display="block";
	} else {
		document.getElementById(row).style.display="none";
	}
	
}

