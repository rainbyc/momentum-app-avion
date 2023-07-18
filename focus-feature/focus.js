window.addEventListener("load", function() {
    var focus = localStorage.getItem("focus");
    if (focus) {
      showFocus(focus);
    }
  });
  
  function saveFocus() {
    var focusInput = document.getElementById("focusInput");
    var focusText = focusInput.value;
  
    if (focusText.trim() !== "") {
      localStorage.setItem("focus", focusText);
      showFocus(focusText);
      focusInput.value = "";
    }
  }
  
  function deleteFocus() {
    localStorage.removeItem("focus");
    document.getElementById("focusDisplay").style.display = "none";
    document.getElementById("focusInput").style.display = "block";
    document.getElementById("focusText").classList.remove("done");
    localStorage.removeItem("doneStatus");
  }
  
  function toggleDone() {
    var focusText = document.getElementById("focusText");
    focusText.classList.toggle("done");
  
    var isDone = focusText.classList.contains("done");
    localStorage.setItem("doneStatus", isDone.toString());
  }
  
  function showFocus(focus) {
    var focusDisplay = document.getElementById("focusDisplay");
    var focusText = document.getElementById("focusText");
    var focusInput = document.getElementById("focusInput");
  
    focusText.textContent = focus;
    focusDisplay.style.display = "block";
    focusInput.style.display = "none";
  
    var isDone = localStorage.getItem("doneStatus") === "true";
    if (isDone) {
      focusText.classList.add("done");
    } else {
      focusText.classList.remove("done");
    }
  }
  
  function handleInput(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      saveFocus();
    }
  }
  