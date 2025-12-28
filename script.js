const words = [
  "I breathe in calm and breathe out tension.",
  "I am allowed to take things one step at a time.",
  "My feelings are valid, and they will pass.",
  "I treat myself with kindness today.",
  "I can handle what’s in front of me right now.",
  "I choose progress over perfection.",
  "I deserve rest as much as I deserve effort.",
  "I am learning to trust myself.",
  "I notice the good things that are already here.",
  "I can start again whenever I need to.",
  "I am proud of myself for trying.",
  "I give myself permission to be human.",
  "I can ask for help when I need it.",
  "My small actions add up to big change.",
  "I am becoming more resilient every day.",
  "I make time for what matters to me.",
  "I can be calm even when things are uncertain.",
  "I am worthy of respect—including from myself.",
  "I focus on what I can control.",
  "I let go of what I can’t control.",
  "I can do hard things with steady effort.",
  "I take care of my mind like it matters—because it does.",
  "I am building a life that fits me.",
  "I choose thoughts that support me.",
  "I speak to myself like I would to a good friend.",
  "I am allowed to set boundaries.",
  "My needs matter.",
  "I am growing at my own pace.",
  "I can learn from mistakes without judging myself.",
  "I am more than one moment or one mood.",
  "I welcome moments of peace.",
  "I have strengths I can rely on.",
  "I show up for myself today.",
  "I am open to joy, even in small ways.",
  "I can be patient with my progress.",
  "I allow myself to feel, then I move forward gently.",
  "I am safe to be myself.",
  "I choose to be present in this moment.",
  "I can pause and breathe before I respond.",
  "I am capable of making good choices for me.",
  "I trust myself to figure things out.",
  "I can create a little structure that helps me.",
  "I am allowed to change my mind.",
  "I choose courage over comfort when it matters.",
  "I am becoming more confident through practice.",
  "I celebrate small wins.",
  "I release pressure that doesn’t help me.",
  "I deserve kindness from others, and I also give it to myself.",
  "I am learning to listen to my body’s signals.",
  "I can take breaks without guilt.",
  "I can handle disappointment and keep going.",
  "I am not behind; I am on my path.",
  "I give myself credit for effort.",
  "I accept myself as I am while I keep growing.",
  "I can find something to be grateful for today.",
  "I choose routines that support my well-being.",
  "I am allowed to say no.",
  "I protect my peace.",
  "I can let today be enough.",
  "I make space for rest and play.",
  "I deserve to feel supported.",
  "I notice my thoughts without believing all of them.",
  "I can redirect my attention to what helps.",
  "I am learning to manage stress in healthy ways.",
  "I can do one helpful thing right now.",
  "I trust my ability to adapt.",
  "I let go of comparisons.",
  "I measure myself by my values, not by others’ opinions.",
  "I choose honesty with myself.",
  "I am allowed to take up space.",
  "I can be gentle and still be strong.",
  "I practice self-respect.",
  "I can communicate clearly and kindly.",
  "I deserve friendships that feel safe and mutual.",
  "I can repair and reconnect when needed.",
  "I am open to learning new coping skills.",
  "I can slow down when I need to.",
  "I am building emotional balance with practice.",
  "I can accept uncertainty without panic.",
  "I can tolerate discomfort and still make wise choices.",
  "I choose thoughts that are realistic and supportive.",
  "I can forgive myself and move on.",
  "I let go of shame; I keep the lesson.",
  "I am not defined by my past.",
  "I can create a better next moment.",
  "I am allowed to enjoy my life.",
  "I notice what energizes me and make room for it.",
  "I take care of the basics: sleep, food, water, movement, and connection.",
  "I can be consistent without being rigid.",
  "I honor my priorities.",
  "I can focus on the next right step.",
  "I am proud of the person I am becoming.",
  "I choose to be curious instead of critical.",
  "I can be kind to myself on difficult days.",
  "I deserve to feel calm and supported.",
  "I trust that I can handle challenges as they come.",
  "I am building a steady inner voice.",
  "I welcome peace, clarity, and strength.",
  "I am enough, right now.",
  "I allow myself to laugh and enjoy small moments."
];

const wordContainer = document.getElementById("wordContainer");
const intervalInput = document.getElementById("intervalInput");
const setIntervalButton = document.getElementById("setIntervalButton");

let pauseMs = 5000;     // pause AFTER speaking finishes
let timerId = null;
let isRunning = true;
let lastIndex = -1;

// Get a random affirmation (avoids repeating the same one twice in a row)
function getRandomWord() {
  if (!words.length) return "Paste your affirmations into words[].";
  if (words.length === 1) return words[0];

  let idx;
  do {
    idx = Math.floor(Math.random() * words.length);
  } while (idx === lastIndex);

  lastIndex = idx;
  return words[idx];
}

// Speak text and resolve when finished
function speak(text) {
  return new Promise((resolve) => {
    // Stop current + clear queue to prevent lag/drift
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve(); // fail gracefully

    window.speechSynthesis.speak(utterance);
  });
}

async function runCycle() {
  if (!isRunning) return;

  const newWord = getRandomWord();
  wordContainer.textContent = newWord;

  await speak(newWord);

  if (!isRunning) return;

  clearTimeout(timerId);
  timerId = setTimeout(runCycle, pauseMs);
}

function setNewInterval() {
  const seconds = Number(intervalInput.value);
  if (Number.isFinite(seconds) && seconds > 0) {
    pauseMs = seconds * 1000;

    // Match your old behavior: apply immediately by showing/speaking a new one now
    clearTimeout(timerId);
    runCycle();
  } else {
    alert("Please enter a valid number greater than 0");
  }
}

setIntervalButton.addEventListener("click", setNewInterval);

// Start immediately (note: some browsers won't speak until after a user interaction)
runCycle();





