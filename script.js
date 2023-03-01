"use strict";

loadContent('swe');

var headings = document.querySelectorAll('.heading');
console.log(headings);

for (const h of headings) {
    h.addEventListener("mousedown", () => {
        toggleRow(h);
    });
    toggleRow(h);
}

let currentLanguage = 'swe';

document.getElementById('languageToggle').addEventListener("mousedown", () => toggleLanguage());






function toggleLanguage() {

    if (currentLanguage == 'swe') {
        document.getElementById('languageToggle').src = "english.png";
        currentLanguage = 'eng'
    }

    else if (currentLanguage == 'eng') {
        document.getElementById('languageToggle').src = "swedish.png";
        currentLanguage = 'swe'
    }

    loadContent(currentLanguage);

}

function loadContent(language) {

    let source = './content-swe.json';

    if (language == 'swe') {
        source = './content-swe.json'
    }
    if (language == 'eng') {
        source = "./content-eng.json"
    }

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
