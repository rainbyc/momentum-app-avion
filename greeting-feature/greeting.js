function showGreeting(event) {
  if (event.keyCode === 13) {
    let nameInput = document.getElementById("nameInput");
    let greeting = document.getElementById("greeting");

    let name = nameInput.value;
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let greetingMessage = "";

    if (currentHour >= 0 && currentHour < 12) {
      greetingMessage = "Good morning";
    } else {
      greetingMessage = "Good evening";
    }

    greeting.textContent = greetingMessage + ", " + name + "!";
    nameInput.value = "";

    // Save name in local storage
    localStorage.setItem("name", name);
  }
}

function checkEnter(event) {
  if (event.keyCode === 13) {
    showGreeting(event);
  }
}

// Retrieve name from local storage on page load
window.addEventListener("load", function() {
  let name = localStorage.getItem("name");
  if (name) {
    let nameInput = document.getElementById("nameInput");
    nameInput.value = name;
  }
});
