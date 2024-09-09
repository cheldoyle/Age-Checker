let age = 0;

function checkAge() {
    const birthdayInput = document.getElementById("birthday").value;
    const birthday = new Date(birthdayInput);
    const today = new Date();

    age = today.getFullYear() - birthday.getFullYear();
    const monthDifference = today.getMonth() - birthday.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (age >= 18) {
        over18();
    } else if (age < 18 && age >= 0) {
        under18();
    } else if (age < 0) {
        timeTravel();
    }
}

function over18() {
    let gif = document.createElement("img");
    gif.src = "https://j.gifs.com/mL0ElY.gif";

    let appendHere = document.querySelector(".reactGif");
    appendHere.innerHTML = "";
    appendHere.appendChild(gif);

    let newText = document.getElementById("textReact");
    newText.innerHTML = "IT'S PARTYIN' TIME!"
}
function under18() {
    let gif = document.createElement("img");
    gif.src = "https://media1.giphy.com/media/3ohzA7wUdeAfy3aaHe/giphy.gif?cid=6c09b952b7nwm6puacakcv6xgnzb4o538o12wfv8zjpz0ogz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";

    let appendHere = document.querySelector(".reactGif");
    appendHere.innerHTML = "";
    appendHere.appendChild(gif);

    let newText = document.getElementById("textReact");
    newText.innerHTML = "No babies allowed"
}
function timeTravel() {
    let gif = document.createElement("img");
    gif.src = "https://i.pinimg.com/originals/5f/b1/b2/5fb1b2fd81a23527aac138382e950d0b.gif";

    let appendHere = document.querySelector(".reactGif");
    appendHere.innerHTML = "";
    appendHere.appendChild(gif);

    let newText = document.getElementById("textReact");
    newText.innerHTML = "What are ya, some kinda time traveller?"
}