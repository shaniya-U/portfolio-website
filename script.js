// Typing Animation
const text = "Hi, I'm Shaniya Sheriff";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.querySelector('.typing-text').innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Fade-in on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = '1';
      sec.style.transform = 'translateY(0)';
    }
  });
});
