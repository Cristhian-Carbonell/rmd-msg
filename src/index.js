const messages = [
    "Oscar",
    "Ana",
    "Nicolai",
    "Jessica",
    "Diego",
    "Laura",
    "Cristhian",
    "Carolina"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };
