"use strict";

function runTypingEffect() {
  const text = "Erin Bondo";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 200;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, element, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      element.textContent += text.charAt(i);
    }, delay * i);
  }
}

window.addEventListener("load", runTypingEffect);
