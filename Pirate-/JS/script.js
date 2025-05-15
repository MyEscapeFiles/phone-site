// === EFFET MATRIX ===============================
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = 'アアイウエカキクケコABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 14;
const columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00ff41';
  ctx.font = fontSize + 'px monospace';

  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}
setInterval(drawMatrix, 33);

// === VALIDATION DU FORMULAIRE ====================
const input = document.getElementById('phoneInput');
const btn = document.getElementById('validateBtn');
const message = document.getElementById('message');
const content = document.querySelector('.content');
const transition = document.getElementById('transition');
const countdownText = document.getElementById('countdownText');

btn.addEventListener('click', () => {
  const value = input.value.trim();
  message.textContent = "";

  if (!/^\d+$/.test(value)) {
    message.textContent = "Ceci n'est pas un numéro de téléphone.";
    return;
  }

  if (value !== "0783991006") {
    message.textContent = "Ce téléphone est introuvable.";
    return;
  }

  // ✅ Bon numéro : masquer le contenu, afficher la transition
  content.style.display = 'none';
  transition.classList.remove('hidden');

// Bon numéro : transition simplifiée
content.style.display = 'none';
transition.classList.remove('hidden');

setTimeout(() => {
  window.location.href = "video.html";
}, 2500); // 2.5 secondes d'affichage

  const countdownInterval = setInterval(() => {
    const currentText = steps[index];
    countdownText.textContent = currentText;

    // Appliquer le clignotement sur la dernière étape
    if (index === steps.length - 1) {
      countdownText.classList.add('blink');
    }

    index++;

    if (index === steps.length) {
      clearInterval(countdownInterval);
      setTimeout(() => {
        window.location.href = "video.html";
      }, 1000);
    }
  }, 1000);
});
