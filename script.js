// INPUT
const inputText = document.querySelector('#inputItself');

// OUTPUT
const totalCharacterText = document.querySelector('#totalCharacterText');
const wordCountText = document.querySelector('#wordCountText');
const sentenceCountText = document.querySelector('#sentenceCountText');

// APP
let wordCountTextCounter = 0;
let sentenceCountTextCounter = 0;

// COUNTING THE TOTAL CHARACTERS

function handlingTheFunctionalities(e) {
    inputText.textContent = e.target.value;
    const inputWords = inputText.textContent;
    
    // TOTAL CHARACTERS
    const totalCharacters = e.target.value.length;
    totalCharacterText.textContent = String(totalCharacters).padStart(2, 0);

    // WORD COUNT
    const wordCounter = inputWords.split(' ').length;
    wordCountText.textContent = inputWords.length > 0 ? String(wordCounter).padStart(2, 0) : '00';
    
    // SENTENCE COUNT
    const sentenceCounter = inputWords.split('.').length;
    sentenceCountText.textContent = inputWords.length > 0 ? String(sentenceCounter).padStart(2, 0) : '00';
};

// 
inputText.addEventListener('input', handlingTheFunctionalities);