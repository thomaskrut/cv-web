"use strict";

let currentLanguage = 'swe';

loadContent(currentLanguage);

var headings = document.querySelectorAll('.heading');
console.log(headings);

for (const h of headings) {
    h.addEventListener("mousedown", () => {
        toggleRow(h);
    });
    toggleRow(h);
}



document.getElementById('languageToggle').addEventListener("mousedown", () => toggleLanguage());



function toggleLanguage() {

    if (currentLanguage == 'swe') {
        document.getElementById('languageToggle').src = "swedish.png";
        currentLanguage = 'eng'
    }

    else if (currentLanguage == 'eng') {
        document.getElementById('languageToggle').src = "english.png";
        currentLanguage = 'swe'
    }

    loadContent(currentLanguage);

}

function loadContent(language) {

    let source = './content-swe.json';
    let educationHeading = '';
    let workHeading = '';
    let otherHeading = '';

    if (language == 'swe') {
        source = './content-swe.json'
        educationHeading = "<h2>Utbildning</h2>"
        workHeading = "<h2>Arbetslivserfarenhet</h2>"
        otherHeading = "<h2>Övriga meriter</h2>"
    }
    if (language == 'eng') {
        source = "./content-eng.json"
        educationHeading = "<h2>Education</h2>"
        workHeading = "<h2>Work experience</h2>"
        otherHeading = "<h2>Life experience</h2>"
    }

    document.getElementById("UtbildningHeading").innerHTML = educationHeading
    document.getElementById("ArbetslivserfarenhetHeading").innerHTML = workHeading
    document.getElementById("ÖvrigtHeading").innerHTML = otherHeading

    fetch(source)
        .then((response) => response.json())
        .then(data => {

            document.getElementById('Intro').innerHTML = data.intro.text;

            loadJsonToTable(data, 'education', 'Utbildning');
            loadJsonToTable(data, 'work', 'Arbetslivserfarenhet');
            loadJsonToTable(data, 'other', 'Övrigt');

        });

}

function loadJsonToTable(dataObject, jsonObjectName, elementId) {



    document.getElementById(elementId).innerHTML = "";
    for (const entry of dataObject[jsonObjectName]) {

        document.getElementById(elementId).innerHTML = document.getElementById(elementId).innerHTML + `
        <b>&bull; ${entry.title}</b><br>
        <div class="duration">${entry.duration}</div>
        ${entry.description}
        <br><br>`;
    }
}

function toggleRow(source) {

    const headingText = source.id;

    const elementToToggle = document.getElementById(source.id.substring(0, source.id.length - 7));

    if (elementToToggle.style.display == "none") {
        elementToToggle.style.display = "block";
    } else {
        elementToToggle.style.display = "none";
    }

}
