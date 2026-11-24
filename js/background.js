const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let w, h, points;

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  const count = Math.floor((w * h) / 22000);
  points = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3
  }));
}

function draw(animate) {
  ctx.clearRect(0, 0, w, h);
  points.forEach(p => {
    if (animate) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    ctx.fillStyle = 'rgba(180, 148, 255, 0.5)';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
    ctx.fill();
  });
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x, dy = points[i].y - points[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist < 130) {
        ctx.strokeStyle = `rgba(140, 110, 220, ${0.18 * (1 - dist / 130)})`;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }
  if (animate) requestAnimationFrame(() => draw(true));
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
window.addEventListener('resize', resize);
resize();
draw(!reduceMotion);
