function showGreeting() {
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
  }
  