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
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(drawMatrix, 33);

const input = document.getElementById('phoneInput'),
      btn = document.getElementById('validateBtn'),
      message = document.getElementById('message'),
      content = document.querySelector('.content'),
      transition = document.getElementById('transition');

btn.addEventListener('click', () => {
  const value = input.value.trim();
  message.textContent = "";

  if (!/^\d+$/.test(value)) return message.textContent = "Ceci n'est pas un numéro de téléphone.";
  if (value !== "0783991007") return message.textContent = "Ce téléphone est introuvable.";

  content.style.display = 'none';
  transition.classList.remove('hidden');
  sessionStorage.setItem("access_granted", "true");

  setTimeout(() => window.location.href = "video.html", 2500);
});
