const words = [
    "I can feel overwhelmed and still be okay.",
    "I don’t have to solve my whole life today.",
    "One calm breath is progress.",
    "I’m allowed to take up space without proving anything.",
    "I can choose the next right step, not the perfect one.",
    "My thoughts are loud sometimes, and I can still steer gently.",
    "I can be curious without turning everything into a crisis.",
    "I’m learning to trust myself again, little by little.",
    "It’s safe to slow down.",
    "I can rest without earning it.",
    "I’m allowed to be a work in progress.",
    "I can be proud of effort, not just outcomes.",
    "I am more than my productivity.",
    "I can handle discomfort without panicking.",
    "I can let today be imperfect.",
    "I don’t need to be “on” all the time.",
    "I can soften my grip and still stay strong.",
    "I’m allowed to change my mind.",
    "I can be gentle with myself and still improve.",
    "My worth isn’t a scoreboard.",
    "I can take breaks and come back clearer.",
    "I can do hard things in small pieces.",
    "I can ask for support when I need it.",
    "I can forgive myself for being human.",
    "I can notice the spiral and choose a pause.",
    "I can be grounded even when I feel uncertain.",
    "I don’t have to chase meaning to be meaningful.",
    "I can be okay without having a “big narrative.”",
    "I can focus on what’s real and present.",
    "I can let my nervous system settle.",
    "I can trust the boring basics: sleep, food, water, movement.",
    "I can return to my body for a reset.",
    "My feelings are information, not commands.",
    "I can let emotions move through without fighting them.",
    "I can create distance from anxious thoughts.",
    "I can be kind to myself while I learn new habits.",
    "I’m allowed to start over, as many times as needed.",
    "I can choose stability over intensity.",
    "I can accept today as it is, without surrendering my goals.",
    "I can release the need to “figure myself out.”",
    "I’m allowed to live, not just analyze living.",
    "I can enjoy simple things without justifying them.",
    "I can be proud of staying steady.",
    "I can be patient with slow progress.",
    "Consistency counts, even when it’s boring.",
    "I can take one small action that helps Future Me.",
    "I can celebrate tiny wins.",
    "I can learn from mistakes without turning them into shame.",
    "I can rebuild trust with myself through follow-through.",
    "I can choose a calmer pace that actually lasts.",
    "I can do less and still move forward.",
    "I can say no to things that drain me.",
    "I can protect my attention like it matters—because it does.",
    "I can simplify without losing depth.",
    "I can let go of perfection and keep the good parts.",
    "I can act on my values, even when I don’t feel confident.",
    "I can be brave in quiet ways.",
    "I can be disciplined without being harsh.",
    "I can be ambitious without being frantic.",
    "I can hold myself with compassion and accountability.",
    "I can practice self-respect in small choices.",
    "I can stop scrolling, stop spiraling, and return to now.",
    "I can choose what I feed my mind.",
    "I can notice comparison and opt out.",
    "I don’t need external validation to be legitimate.",
    "I can build a life that feels peaceful, not just impressive.",
    "I can learn to feel safe in my own mind.",
    "I can let today be a training day, not a test day.",
    "I can treat setbacks as data, not destiny.",
    "I can do the next repetition—one more rep.",
    "I can show up even when motivation is low.",
    "I can make decisions from clarity, not urgency.",
    "I can wait for a better moment to respond.",
    "I can choose my tone, even when I can’t choose my mood.",
    "I can be firm with boundaries and soft with myself.",
    "I can repair relationships with honesty and patience.",
    "I can be loved without performing.",
    "I can be safe with people who respect my limits.",
    "I can give myself permission to be ordinary sometimes.",
    "I can enjoy being good at something without making it my identity.",
    "My creativity is still here, even on quiet days.",
    "I can make music that matches my real emotional weather.",
    "I can practice slowly and still improve.",
    "I can teach with presence, not perfection.",
    "I can offer students calm leadership.",
    "I can trust my musical instincts again.",
    "I can keep learning without self-attack.",
    "I can be proud of my craft.",
    "I can build skills through repetition, not pressure.",
    "I can trade with patience and discipline.",
    "I can follow my rules even when I feel excited.",
    "I can accept that not every day is a trading day.",
    "I can protect my capital and my nervous system.",
    "I can respect risk like a professional.",
    "I can step away when I’m not centered.",
    "I can focus on process over P&L.",
    "I can learn from the market without taking it personally.",
    "I can be steady even when outcomes vary.",
    "I can keep my life bigger than any chart.",
    "I can trust that stability is a skill I’m building.",
    "I can choose peace as a long-term strategy.",
    "I am allowed to feel better, starting now.",
    "I can begin again without drama.",
    "I can do today at a humane pace.",
    "I can lower the volume without losing my edge.",
    "I can be steady even when I feel shaky inside.",
    "I can let “good enough” be powerful.",
    "I can choose calm over clenching.",
    "I can trade urgency for clarity.",
    "I can let one task be enough for now.",
    "I can finish one small loop and call it progress.",
    "I can stop mid-spiral and return to my breath.",
    "I can treat my mind like a friend, not a project.",
    "I can notice tension and soften my shoulders.",
    "I can unclench my jaw and give my body a message of safety.",
    "I can slow my thoughts by slowing my breathing.",
    "I can step back from the need to optimize everything.",
    "I can release the fantasy of a perfect system.",
    "I can enjoy structure without becoming rigid.",
    "I can be disciplined and still be kind.",
    "I can hold high standards without punishing myself.",
    "I can separate effort from self-worth.",
    "I can be proud of restraint.",
    "I can honor my limits without shame.",
    "I can protect my sleep like it’s sacred.",
    "I can eat and hydrate like it matters—because it does.",
    "I can take a walk and let it count as success.",
    "I can make space for recovery, not just output.",
    "I can let my nervous system catch up.",
    "I can stop digging and start soothing.",
    "I can choose regulation over rumination.",
    "I can let thoughts pass like weather.",
    "I can notice a scary thought and not obey it.",
    "I can label the feeling and keep moving gently.",
    "I can be uncomfortable and still safe.",
    "I can tolerate uncertainty for a few minutes at a time.",
    "I can take the next step with partial confidence.",
    "I can act without needing to feel ready.",
    "I can practice courage in small doses.",
    "I can be consistent without being intense.",
    "I can build momentum through tiny wins.",
    "I can keep promises to myself, one at a time.",
    "I can trust myself more with each follow-through.",
    "I can forgive myself and still learn.",
    "I can repair a slip without turning it into a story.",
    "I can get back on track without self-attack.",
    "I can make room for imperfect practice.",
    "I can show up and be a little messy.",
    "I can be proud of a simple routine.",
    "I can let stability be my flex.",
    "I can measure progress by calm, not chaos.",
    "I can be patient with slow improvements.",
    "I can stop comparing and return to my lane.",
    "I can let other people’s pace be irrelevant to me.",
    "I can be quietly competent.",
    "I can be gentle and still take myself seriously.",
    "I can choose honesty over performance.",
    "I can be real without being raw all the time.",
    "I can protect my energy without explaining myself.",
    "I can say no and still be a good person.",
    "I can choose fewer commitments and feel relief.",
    "I can let my calendar serve my life.",
    "I can make decisions that future me will thank me for.",
    "I can create an environment that helps me succeed.",
    "I can design my days to reduce friction.",
    "I can do one thing that makes tomorrow easier.",
    "I can let small habits carry me.",
    "I can stay grounded by returning to basics.",
    "I can stop chasing intensity as proof of aliveness.",
    "I can choose peace without losing ambition.",
    "I can let success be sustainable.",
    "I can value boredom as a sign of stability.",
    "I can enjoy calm without suspecting it.",
    "I can accept quiet as a win.",
    "I can treat my attention like a limited resource.",
    "I can put my phone down and feel proud.",
    "I can choose less input and more clarity.",
    "I can curate what I consume.",
    "I can step away from arguments I don’t need.",
    "I can take a break from news and still be responsible.",
    "I can choose my focus deliberately.",
    "I can trust that I don’t have to respond to everything.",
    "I can let some things remain unresolved for now.",
    "I can prioritize what actually matters today.",
    "I can keep my goals simple and doable.",
    "I can accept that some days are maintenance days.",
    "I can treat maintenance as meaningful work.",
    "I can celebrate staying steady.",
    "I can notice what’s working and build on it.",
    "I can be proud of restraint with spending and risk.",
    "I can protect my downside like a professional.",
    "I can step out when I’m not centered.",
    "I can wait for my setup without forcing it.",
    "I can skip a trade and call it skill.",
    "I can follow my plan even when it’s boring.",
    "I can let my edge be patience.",
    "I can treat losses as tuition, not identity.",
    "I can keep my self-talk clean after a red day.",
    "I can end the day flat and still feel successful.",
    "I can stop when I hit my limit.",
    "I can respect my rules because they respect me.",
    "I can trade my system, not my feelings.",
    "I can learn one lesson and move on.",
    "I can keep my life bigger than my performance.",
    "I can be present with students instead of perfect.",
    "I can teach calmly and it will land.",
    "I can be a steady signal for the people I help.",
    "I can practice slowly and still get better.",
    "I can make music that soothes me.",
    "I can let music be play, not proof.",
    "I can enjoy art without turning it into pressure.",
    "I can trust my taste and my timing.",
    "I can let creativity return on its own schedule.",
    "I can be kind to myself and still be honest.",
    "I can speak to myself like someone I care about.",
    "I can treat myself with basic dignity today.",
    "I can allow myself to feel better without guilt.",
    "I can choose one comforting thing right now."
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




