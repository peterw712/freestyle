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
  "I allow myself to laugh and enjoy small moments.",
  "I give myself a fresh start each morning.",
  "I can create calm with one slow breath.",
  "I am allowed to take life at a sustainable pace.",
  "I choose to be on my own side.",
  "I let myself be imperfect and still worthy.",
  "I can hold my worries lightly.",
  "I release tension from my shoulders and jaw.",
  "I can soften my thoughts when I notice harshness.",
  "I deserve time to recharge.",
  "I can do less and still be valuable.",
  "I listen to what my mind needs today.",
  "I listen to what my body needs today.",
  "I can be proud without needing to be perfect.",
  "I practice patience with myself and others.",
  "I can be flexible when plans change.",
  "I choose to respond thoughtfully.",
  "I am allowed to protect my energy.",
  "I can say yes to what nourishes me.",
  "I can say no to what drains me.",
  "I deserve moments of quiet.",
  "I can enjoy simple things without earning them first.",
  "I treat my mistakes as information, not proof.",
  "I am learning what works for me.",
  "I can take up space with confidence and respect.",
  "I release the need to do everything at once.",
  "I can prioritize what matters most.",
  "I can let go of what is not urgent.",
  "I choose to notice beauty around me.",
  "I allow myself to feel joy without guilt.",
  "I trust myself to make adjustments as I go.",
  "I can be gentle with my expectations.",
  "I am becoming better at calming myself.",
  "I can handle uncomfortable feelings safely.",
  "I am not my anxious thoughts.",
  "I am not my worst day.",
  "I can move forward even if I feel unsure.",
  "I trust the process of learning.",
  "I celebrate effort, not just outcomes.",
  "I choose to focus on what I’m doing well.",
  "I can be proud of small improvements.",
  "I give myself permission to rest when I’m tired.",
  "I can ask for clarity when I’m confused.",
  "I can take a break and come back stronger.",
  "I can be kind and still be honest.",
  "I choose compassion over criticism.",
  "I let go of all-or-nothing thinking.",
  "I can do this in a “good enough” way.",
  "I am building confidence through repetition.",
  "I can take care of myself while caring about others.",
  "I choose to be present with the people I love.",
  "I am grateful for my ability to grow.",
  "I am open to support and connection.",
  "I can reach out instead of shutting down.",
  "I am allowed to change course.",
  "I can learn to trust my intuition.",
  "I can create a plan that fits my life.",
  "I am learning to manage my time with kindness.",
  "I can make room for fun and rest.",
  "I can enjoy being in my own company.",
  "I respect my limits and needs.",
  "I can take small steps toward my goals.",
  "I choose to do one thing fully.",
  "I can let my mind settle like snow in a globe.",
  "I can return to my breath anytime.",
  "I am safe to slow down.",
  "I choose to be curious about my emotions.",
  "I can name what I feel and still be okay.",
  "I can feel nervous and still be capable.",
  "I can feel sad and still have hope.",
  "I can feel frustrated and still be patient.",
  "I can handle feedback without losing my worth.",
  "I can learn without comparing my pace to others.",
  "I am allowed to be a beginner.",
  "I can practice without pressure.",
  "I choose a mindset that helps me heal.",
  "I can forgive myself for not knowing sooner.",
  "I release what I’ve been carrying unnecessarily.",
  "I can make peace with the present moment.",
  "I choose to be steady, not rushed.",
  "I can take time to think before I decide.",
  "I trust myself to do my best with what I have.",
  "I am building a supportive inner dialogue.",
  "I can replace self-judgment with self-respect.",
  "I choose to speak gently to myself.",
  "I can notice my wins, even if they’re quiet.",
  "I deserve to feel proud of myself.",
  "I can set boundaries without explaining everything.",
  "I can protect my peace without feeling selfish.",
  "I choose to let go of guilt that isn’t mine.",
  "I can enjoy today without worrying about tomorrow.",
  "I can focus on my next helpful action.",
  "I can create routines that make life easier.",
  "I can make space for creativity.",
  "I can make space for play.",
  "I can make space for stillness.",
  "I trust that I am becoming more balanced.",
  "I am resilient, even when I feel tired.",
  "I can be strong and ask for help.",
  "I choose to care for myself consistently.",
  "I am allowed to feel proud of who I am.",
  "I welcome calm, clarity, and self-trust."
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






