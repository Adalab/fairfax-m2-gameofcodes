

// function changeColor() {
//     previewCard.classList.add('preview-red');
//     previewCard.classList.remove('preview-grey', 'preview-default');
// }


// radioRed.addEventListener('click', changeColor);

// // grey

// const radioGrey = document.querySelector('#grey_palette');




// radioGrey.addEventListener('click', changeColor2);

// //default

// const radioDefault = document.querySelector('#blue_palette');


// function changeColor3() {
//     previewCard.classList.remove('preview-red', 'preview-grey');
//     previewCard.classList.add('preview-default');
// }

'use strict';

const radioBlue = document.querySelector('#blue_palette');
const radioRed = document.querySelector('#red_palette');
const radioGrey = document.querySelector('#grey_palette');

const previewCard = document.querySelector('.preview__card');

function changeColors(classtoadd) {
    console.log(classtoadd);
    previewCard.classList.remove('preview-grey','preview-red', 'preview-blue');
    previewCard.classList.add(classtoadd);
}

const getPalette = event => {
    const name = event.currentTarget.name;
    const value = parseInt(event.currentTarget.value);
    console.log(name, value);
    if (value === 1) {
        changeColors('preview-blue');
    } else if (value === 2) {
        changeColors('preview-red');
    } else {
        changeColors('preview-grey');
    }
    saveData(name, value);
};

radioBlue.addEventListener('click', getPalette);
radioRed.addEventListener('click', getPalette);
radioGrey.addEventListener('click', getPalette);