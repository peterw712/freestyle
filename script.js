const words =  [ "city", "car", "happiness", "Toronto", "George", "Microsoft", "apple", "dog", "music",
    "freedom", "love", "intelligence", "team", "flock", "bunch", "book", "cars", "water",
    "rice", "information", "toothpaste", "mother-in-law", "haircut", "Mary's book", "dog's leash",
    "cat", "house", "lake", "banana", "mountain", "computer", "university", "teacher",
    "student", "garden", "painting", "harmony", "fear", "truth", "culture", "tradition",
    "government", "community", "family", "friendship", "joy", "sadness", "anger", "dream",
    "star", "ocean", "forest", "river", "desert", "rain", "snow", "cloud", "storm",
    "lightning", "thunder", "fire", "earthquake", "volcano", "planet", "galaxy", "universe",
    "time", "space", "history", "future", "present", "past", "moment", "second", "hour",
    "day", "week", "month", "year", "century", "millennium", "life", "death", "birth",
    "existence", "reality", "fantasy", "thought", "idea", "creativity", "inspiration",
    "imagination", "knowledge", "wisdom",
    "forest", "breeze", "adventure", "mystery", "exploration", "discovery", "journey", "voyage",
    "expedition", "quest", "mission", "odyssey", "pilgrimage", "safari", "trek", "wanderlust",
    "expanse", "territory", "region", "province", "district", "sector", "zone", "neighborhood",
    "community", "settlement", "village", "town", "metropolis", "capital", "nation", "country",
    "state", "republic", "kingdom", "empire", "dynasty", "civilization", "society", "culture",
    "heritage", "tradition", "custom", "ritual", "ceremony", "celebration", "festival", "event",
    "gathering", "assembly", "conference", "meeting", "convention", "summit", "forum", "symposium",
    "workshop", "seminar", "lecture", "class", "lesson", "tutorial", "course", "program", "curriculum",
    "syllabus", "schedule", "agenda", "plan", "strategy", "tactic", "technique", "method", "process",
    "procedure", "system", "framework", "model", "paradigm", "concept", "theory", "principle",
    "rule", "law", "regulation", "guideline", "policy", "standard", "norm", "protocol",
    "framework", "blueprint", "architecture", "design", "structure", "pattern", "template", "draft",
    "sketch", "outline", "plan", "diagram", "map", "chart", "graph", "figure", "table", "list",
    "sequence", "series", "array", "matrix", "grid", "network", "system", "ecosystem", "web",
    "internet", "technology", "innovation", "invention", "gadget", "device", "machine", "robot",
    "automation", "software", "program", "application", "app", "platform", "interface", "database",
    "storage", "memory", "processor", "chip", "circuit", "battery", "power", "energy", "force",
    "momentum", "velocity", "acceleration", "gravity", "magnetism", "electricity", "voltage",
    "current", "resistance", "capacitance", "inductance", "frequency", "wavelength", "amplitude",
    "wave", "signal", "transmission", "reception", "broadcast", "communication", "message", "information",
    "data", "knowledge", "insight", "wisdom", "understanding", "comprehension", "perception", "awareness",
    "consciousness", "mind", "brain", "thought", "idea", "concept", "notion", "belief", "value", "principle",
    "ethics", "morality", "virtue", "integrity", "honesty", "trust", "loyalty", "faith",
    "hope", "ambition", "goal", "dream", "vision", "aspiration", "desire", "wish", "plan", "strategy",
    "tactic", "scheme", "plot", "maneuver", "action", "activity", "task", "project", "assignment",
    "work", "job", "career", "profession", "occupation", "trade", "craft", "skill", "ability", "talent",
    "gift", "strength", "weakness", "advantage", "disadvantage", "opportunity", "challenge", "problem",
    "solution", "resolution", "answer", "response", "reaction", "feedback", "comment", "remark",
    "statement", "declaration", "announcement", "proclamation", "speech", "talk", "presentation",
    "lecture", "discussion", "debate", "argument", "dispute", "conflict", "battle", "fight", "struggle",
    "contest", "competition", "race", "tournament", "match", "game", "sport", "exercise", "training",
    "practice", "rehearsal", "drill", "warm-up", "cool-down", "stretching", "workout", "regimen",
    "routine", "habit", "custom", "tradition", "ritual", "ceremony", "service", "worship", "prayer",
    "meditation", "contemplation", "reflection", "thought", "idea", "concept", "notion", "belief",
    "faith", "trust", "confidence", "reliance", "dependence", "independence", "freedom",
    "firm", "organization", "institution", "establishment", "foundation", "association", "society",
    "club", "group", "team", "squad", "crew", "band", "ensemble", "orchestra", "choir", "quartet",
    "trio", "duo", "soloist", "artist", "painter", "sculptor", "musician", "singer", "composer",
    "writer", "author", "poet", "novelist", "playwright", "screenwriter", "journalist", "reporter",
    "editor", "publisher", "photographer", "filmmaker", "director", "producer", "actor", "actress",
    "dancer", "choreographer", "performer", "entertainer", "comedian", "magician", "illusionist",
    "acrobat", "athlete", "player", "coach", "trainer", "instructor", "teacher", "professor",
    "educator", "lecturer", "tutor", "mentor", "advisor", "consultant", "counselor", "therapist",
    "psychologist", "psychiatrist", "doctor", "physician", "surgeon", "nurse", "dentist", "pharmacist",
    "veterinarian", "scientist", "researcher", "engineer", "architect", "designer", "planner",
    "developer", "programmer", "analyst", "specialist", "expert", "technician", "mechanic", "electrician",
    "plumber", "carpenter", "builder", "contractor", "laborer", "worker", "employee", "staff", "crew",
    "team", "colleague",
    "coworker", "boss", "manager", "supervisor", "executive", "director", "officer", "chief",
    "president", "vice-president", "secretary", "treasurer", "controller", "administrator", "assistant",
    "aide", "deputy", "representative", "agent", "delegate", "envoy", "ambassador", "diplomat",
    "attache", "consul", "minister", "official", "bureaucrat", "clerk", "receptionist", "operator",
    "attendant", "assistant", "helper", "supporter", "ally", "advocate", "champion", "promoter",
    "sponsor", "backer", "patron", "benefactor", "philanthropist", "volunteer", "activist", "campaigner",
    "protester", "reformer", "revolutionary", "insurgent", "rebel", "dissident", "martyr", "hero",
    "leader", "commander", "chief", "captain", "general", "admiral", "officer", "soldier", "trooper",
    "fighter", "warrior", "mercenary", "militant", "combatant", "defender", "guardian", "protector",
    "watchman", "sentry", "scout", "spy", "agent", "detective", "investigator", "inspector", "patrolman",
    "policeman", "sheriff", "marshal", "warden", "constable", "bailiff", "warden", "coroner", "judge",
    "magistrate", "justice", "lawyer", "attorney", "solicitor", "barrister", "advocate", "counsel",
    "advisor", "consultant", "counselor", "representative",
    "client", "customer", "patient", "recipient", "beneficiary", "user", "consumer", "buyer",
    "shopper", "purchaser", "subscriber", "member", "participant", "contestant", "competitor",
    "candidate", "applicant", "nominee", "prospect", "audience", "spectator", "viewer", "observer",
    "witness", "onlooker", "bystander", "visitor", "guest", "traveler", "tourist", "voyager", "explorer",
    "adventurer", "pilgrim", "migrant", "immigrant", "emigrant", "refugee", "asylum-seeker", "resident",
    "inhabitant", "citizen", "native", "local", "foreigner", "stranger", "outsider", "alien", "guest",
    "host", "landlord", "tenant", "occupant", "lodger", "boarder", "roommate", "housemate", "neighbor",
    "friend", "companion", "acquaintance", "colleague", "buddy", "pal", "confidant", "mentor",
    "guide", "teacher", "instructor", "tutor", "coach", "trainer", "guru", "sage", "master", "expert",
    "professional", "specialist", "authority", "connoisseur", "aficionado", "enthusiast", "fan", "supporter",
    "advocate", "believer", "follower", "devotee", "adherent", "disciple", "apostle", "missionary",
    "preacher", "minister", "clergy", "priest", "pastor", "rabbi", "imam", "monk", "nun", "chaplain",
    "cleric", "friar", "abbot", "abbess", "bishop", "cardinal", "pope",
    "monarch", "king", "queen", "prince", "princess", "duke", "duchess", "earl", "count", "countess",
    "baron", "baroness", "lord", "lady", "knight", "squire", "page", "noble", "aristocrat", "patrician",
    "commoner", "peasant", "serf", "vassal", "tenant", "subject", "citizen", "inhabitant", "resident",
    "dweller", "occupant", "tenant", "proprietor", "owner", "landlord", "landowner", "homeowner",
    "renter", "leaser", "occupier", "inhabitant", "settler", "colonist", "pioneer", "frontiersman",
    "explorer", "adventurer", "prospector", "trapper", "hunter", "fisherman", "gatherer", "farmer",
    "rancher", "shepherd", "herder", "cowboy", "wrangler", "breeder", "cultivator", "planter",
    "grower", "gardener", "horticulturist", "botanist", "florist", "landscaper", "forester",
    "logger", "lumberjack", "woodcutter", "carpenter", "joiner", "cabinetmaker", "cooper", "wheelwright",
    "blacksmith", "smith", "metalworker", "welder", "machinist", "mechanic", "technician", "engineer",
    "inventor", "designer", "draftsman", "architect", "builder", "constructor", "bricklayer",
    "mason", "plasterer", "roofer", "tiler", "painter", "decorator", "glazier", "electrician"
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
