//Change the span with the class mess-with-me to have a font size of 40px.
const messWithMeWord = document.querySelector('span.mess-with-me');
messWithMeWord.style.fontSize = '40px';


//Change the paragraph with the class mess-with-me to have a background color of green.
const messWithMeParagraph = document.querySelector('p.mess-with-me');
messWithMeParagraph.style.backgroundColor = 'green';

//Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

const hideRex = document.querySelector('#hide-me');
hideRex.style.display = 'none';

//Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
const triceratops = document.querySelector('#triceratops');
triceratops.style.width = '324px';

//Event Listener Challenges ==============================================================

// when it is clicked, the font color changes to orange.
const makeOrange = function() {
    messWithMeWord.style.color = 'orange';
}
messWithMeWord.addEventListener('click', makeOrange);

//Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.
const giveRedBorder = function() {
    triceratops.style.border = '3px solid red';
}
triceratops.addEventListener('click', giveRedBorder);

//Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.
const makeTransparent = function() {
    feathered.style.opacity = 0.5;
}
const feathered = document.querySelector('#feathers');
feathered.addEventListener('click', makeTransparent);

const biggify = document.querySelector('#biggify');
biggify.addEventListener('mouseover',function(){
    biggify.style.width = '200px';
});

//Streach Goals =================================================================================

const toggleRowBackground = function() {
    const row = document.querySelector('#row');
    if (row.style.backgroundColor === 'black') {
        row.style.backgroundColor = 'white';
    } else {
        row.style.backgroundColor = 'black';
        }
    }

const clickRow = document.querySelector('button');
clickRow.addEventListener('click', toggleRowBackground);

//=================================================================================================

const toggleSize = function() {
    if (biggify.style.width === '200px') {
        biggify.style.width = '150px';
    } else {
        biggify.style.width = '200px';
    }
}

biggify.addEventListener('mouseout', toggleSize);


