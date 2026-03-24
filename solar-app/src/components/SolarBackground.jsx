import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Canvas tabanlı parçacık ağı + fare etkileşimi
function SolarCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const colors = ["#f97316", "#f59e0b", "#fb923c", "#fbbf24"];

    const particles = Array.from({ length: 80 }, () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x, y, baseX: x, baseY: y,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    const gridLines = Array.from({ length: 15 }, () => {
      const isV = Math.random() > 0.5;
      return isV
        ? { x1: Math.random() * canvas.width, y1: 0, x2: Math.random() * canvas.width, y2: canvas.height, opacity: Math.random() * 0.15 + 0.05, phase: Math.random() * Math.PI * 2 }
        : { x1: 0, y1: Math.random() * canvas.height, x2: canvas.width, y2: Math.random() * canvas.height, opacity: Math.random() * 0.15 + 0.05, phase: Math.random() * Math.PI * 2 };
    });

    const orbs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 80 + 40,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      color: i % 2 === 0 ? "#f97316" : "#f59e0b",
    }));

    let raf;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Glowing orbs
      orbs.forEach((orb) => {
        orb.pulsePhase += orb.pulseSpeed;
        const pulse = Math.sin(orb.pulsePhase) * 0.3 + 0.7;
        const r = orb.radius * pulse;
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, r);
        g.addColorStop(0, `${orb.color}18`);
        g.addColorStop(0.5, `${orb.color}08`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Grid lines
      gridLines.forEach((line) => {
        const pulse = Math.sin(time * 2 + line.phase) * 0.5 + 0.5;
        ctx.strokeStyle = `rgba(249,115,22,${line.opacity * pulse})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      // Particles + mouse interaction
      particles.forEach((p) => {
        const dx = mouseRef.current.x - p.baseX;
        const dy = mouseRef.current.y - p.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.x = p.baseX + dx * force * 0.3;
          p.y = p.baseY + dy * force * 0.3;
        } else {
          p.x += (p.baseX - p.x) * 0.05;
          p.y += (p.baseY - p.y) * 0.05;
        }
        const pulse = Math.sin(time * 3 + p.baseX * 0.01) * 0.3 + 0.7;
        ctx.globalAlpha = p.opacity * pulse;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Bağlantı çizgileri
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(251,146,60,${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// Dönen güneş ışınları
function SunRays() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative w-96 h-96">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-48 origin-bottom"
            style={{
              background: "linear-gradient(to top, transparent, rgba(249,115,22,0.15), transparent)",
              transform: `translate(-50%, -100%) rotate(${(i * 360) / 12}deg)`,
            }}
            animate={{ opacity: [0.3, 0.6, 0.3], scaleY: [0.8, 1.2, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

// Ana export
export default function SolarBackground() {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: "none" }}>
      <SolarCanvas />
      <SunRays />

      {/* SVG grid overlay */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="solar-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(249,115,22,0.06)" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="solar-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.08" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#solar-grid)" />
        <circle cx="50%" cy="50%" r="40%" fill="url(#solar-glow)" />
      </svg>

      {/* Sağ üst floating orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)", filter: "blur(40px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Sol alt floating orb */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)", filter: "blur(50px)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
