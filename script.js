const words =  [
  "I am awareness itself.",
  "I let go of the illusion of control.",
  "I trust the unfolding of this moment.",
  "I am not my thoughts.",
  "I am not my emotions.",
  "I observe without judgment.",
  "I welcome silence.",
  "I surrender to what is.",
  "I am the stillness beneath all movement.",
  "I release the need to be right.",
  "I release the story of “me.”",
  "I am the witness of all experience.",
  "I let go of past and future.",
  "I am rooted in presence.",
  "I rest in the now.",
  "I need nothing to complete me.",
  "I embrace uncertainty.",
  "I allow space between thoughts.",
  "I listen deeply.",
  "I see with clarity, not opinion.",
  "I dissolve into being.",
  "I accept all things as they are.",
  "I move from love, not fear.",
  "I recognize the sacred in all beings.",
  "I bow to the mystery.",
  "I let go of seeking.",
  "I am not separate from life.",
  "I open to grace.",
  "I choose stillness over struggle.",
  "I trust the inner light to guide me.",
  "I release identification with the body.",
  "I am not the doer; I am the being.",
  "I witness the dance of creation.",
  "I meet all things with equanimity.",
  "I am spacious awareness.",
  "I invite truth to dissolve illusion.",
  "I let go of becoming and return to being.",
  "I am free from grasping and aversion.",
  "I recognize ego’s voice and let it pass.",
  "I reside in peace that needs no cause.",
  "I am light playing in form.",
  "I embrace the emptiness that is full.",
  "I flow with what arises and fades.",
  "I allow all to pass through me.",
  "I love without conditions.",
  "I die to the false self in every breath.",
  "I recognize myself in all things.",
  "I abide in the heart of being.",
  "I am the silence between each word.",
  "I am one with the source."
];

const wordContainer = document.getElementById('wordContainer');
const intervalInput = document.getElementById('intervalInput');
const setIntervalButton = document.getElementById('setIntervalButton');

let intervalId;

// Function to get a random word from the array
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to update the displayed word and speak it aloud
function updateWord() {
    const newWord = getRandomWord();
    wordContainer.textContent = newWord;
    speak(newWord);
}

// Function to set a new interval for generating words
function setNewInterval() {
    const intervalValue = parseInt(intervalInput.value) * 1000;
    if (!isNaN(intervalValue) && intervalValue > 0) {
        clearInterval(intervalId);
        intervalId = setInterval(updateWord, intervalValue);
        updateWord();  // Update word immediately after changing interval
    } else {
        alert("Please enter a valid number greater than 0");
    }
}

// Function to speak the given text
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

// Event listener for the set interval button
setIntervalButton.addEventListener('click', setNewInterval);

// Initial call to display a word immediately on load and set default interval
intervalId = setInterval(updateWord, 5000);
updateWord();
