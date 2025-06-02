// Typing Effect
const typingText = document.getElementById("typing-text");
const roles = ["Aspiring Software Developer", "Creative Thinker", "AI-ML Enthusiast", "Tech Explorer"];
let idx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
  const current = roles[idx];
  typingText.textContent = isDeleting
    ? current.substring(0, charIdx--)
    : current.substring(0, charIdx++);

  if (!isDeleting && charIdx === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    idx = (idx + 1) % roles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 40 : 100);
  }
}
typeEffect();
