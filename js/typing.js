const roles = ['IoT Systems Builder', 'Cybersecurity Enthusiast', 'Data & Analytics Engineer'];
const el = document.getElementById('role-text');
let r = 0, c = 0, deleting = false;

function tick() {
  const word = roles[r];
  el.textContent = deleting ? word.slice(0, c--) : word.slice(0, c++);

  if (!deleting && c === word.length + 1) { deleting = true; setTimeout(tick, 1400); return; }
  if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; }

  setTimeout(tick, deleting ? 40 : 80);
}

if (el) tick();
