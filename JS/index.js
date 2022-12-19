var WelcomeMessage = [
    "Welcome!",
    "Python is awful.",
    "Furries :3",
    "Hosted on Oracle Cloud.",
    "Dangered Wolf is cute, but he won't admit it.",
    "Ctrl + Alt + Del",
    "Wait there's a AD?",
    "sudo rm -rf /",
    "real",
    "unreal",
    "Made on a ThinkPad",
    "Glitch might be a Wah",
    "My brain hurts"
];

var randomItem = WelcomeMessage[Math.floor(Math.random() * WelcomeMessage.length)];

function WelcomeStuff() {
    document.getElementById("Welcome").innerHTML +=
        randomItem;
}

function DiscordClipboard() {
    navigator.clipboard.writeText("MrRocket#4109").then(() => {
        console.log("Write to clipboard successful")
    }, () => {
        console.log("Write to clipboard failed!")
    });
}