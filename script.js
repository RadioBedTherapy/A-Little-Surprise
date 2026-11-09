
const kuromi = document.getElementById("kuromi");
const speech = document.getElementById("speech");

const welcomeScreen = document.getElementById("welcome-screen");
const momentsScreen = document.getElementById("moments-screen");
const finalScreen = document.getElementById("final-screen");
const endingScreen = document.getElementById("ending-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

const momentTitle = document.getElementById("moment-title");
const momentMessage = document.getElementById("moment-message");
const momentImage = document.getElementById("moment-image");

const card = document.getElementById("card");
const welcomeImage = document.getElementById("welcome-image");

welcomeImage.src = "images/bbs.gif";

// EDIT YOUR SIX MOMENTS HERE 💚
const moments = [
    {
        title: "You're special ♡",
        message: "I just wanted to remind you how special you are to me. i spent alot of time i should've been studying in just to make this for you and i know it's absolutely worth it!",
        speech: "Oh yeah? that's bare minimum effort for her ༼ つ ◕_◕ ༽つ",
        image: "images/ww.gif"
    },
    {
        title: "A little confession...",
        message: "I don't think you realize just how cute you are. I love everything about you! Your shiny eyes, your hair, your little dances, that HOT voice of yours, and the way you talk to me. Even the tiniest things you do make me smile. ( ^ - ^ )",
        speech: "Awww, that's actually cute (｡♥ ω ♥｡)",
        image: "images/cute.jpg"
    },
    {
        title: "I'm such a lazy person TωT",
        message: "I know you always find me sleeping when you come looking for me, but I honestly love when you wake me up just to talk. And no matter how sleepy I am, you're always gonna be the first thing on my mind when I wake up. ♡",
        speech: "He's such a lazy bum, but he loves you so much hehehe",
        image: "images/photo1.gif"
    },
    {
        title: "You make me feel like a kid again  (^ ● ω ●^) ",
        message: "You bring out a side of me that I didn't even know I missed. Suddenly I'm smiling at my screen, getting excited over the smallest things, and acting all silly just because of you. It's honestly unfair how easily you make me fall for you 😝",
        speech: "this guy really thinks he's impressing you LOL",
        image: "images/bbrh.gif"
    },
    {
        title: "One last thing...",
        message: "I could write a thousand more things, but nothing will ever be enough for how much you deserve. Just know that I love you. 😛♡",
        speech: "I think he has something to say...",
        image: "images/photo2.gif"
    },

];

let currentMoment = 0;

// Show one screen and hide the others
function showScreen(screen) {
    const screens = [
        welcomeScreen,
        momentsScreen,
        finalScreen,
        endingScreen
    ];

    screens.forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}

// Start the letter
startButton.addEventListener("click", () => {
    showScreen(momentsScreen);
    currentMoment = 0;
    showMoment();
});

// Display the current moment
function showMoment() {
    const moment = moments[currentMoment];

    momentNumber.textContent =
        ``;

    momentTitle.textContent = moment.title;
    momentMessage.textContent = moment.message;
    speech.textContent = moment.speech;

    if (moment.image) {
        momentImage.src = moment.image;
        momentImage.hidden = false;
    } else {
        momentImage.hidden = true;
        momentImage.removeAttribute("src");
    }

    nextButton.textContent =
        currentMoment === moments.length - 1
            ? "The very last thing ♡"
            : "Continue ♡";
}

// Move to the next moment
nextButton.addEventListener("click", () => {
    if (currentMoment === moments.length - 1) {
        showScreen(finalScreen);
        speech.textContent = "DON'T CHOOSE NO. TRUST ME.";
        return;
    }

    currentMoment++;
    showMoment();
});

// Beast Boy reacts when clicked
const characterMessages = [
    "hey! pay attention to me!",
    "you're cute hehe (｡♥ ω ♥｡)",
    "pssst... keep going!",
    "i love youuu ♡",
    "i'm so happy you're mine 😛",
    "don't cryyyy cuz i will cry with youuu (╥﹏╥)",
];

let characterIndex = 0;

kuromi.addEventListener("click", () => {
    speech.textContent = characterMessages[characterIndex];

    characterIndex++;

    if (characterIndex >= characterMessages.length) {
        characterIndex = 0;
    }
});

// YES button
yesButton.addEventListener("click", () => {
    showScreen(endingScreen);
    speech.textContent = "I KNEW ITTT (^ o ^)♡";
});

// NO button runs away
noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", moveNoButton);

function moveNoButton() {
    const margin = 15;

    const maxX = Math.max(
        margin,
        document.documentElement.clientWidth - noButton.offsetWidth - margin
    );

    const maxY = Math.max(
        margin,
        document.documentElement.clientHeight - noButton.offsetHeight - margin
    );

    noButton.style.position = "fixed";

    noButton.style.left =
        margin + Math.random() * (maxX - margin) + "px";

    noButton.style.top =
        margin + Math.random() * (maxY - margin) + "px";

    speech.textContent = "NOPE. TRY AGAIN 😛";
}
