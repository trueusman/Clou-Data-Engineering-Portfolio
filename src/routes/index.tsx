import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Shield,
  Network,
  Terminal,
  Code2,
  GraduationCap,
  Award,
  Sparkles,
  ArrowRight,
  Cloud,
  Database,
  Server,
  Wifi,
  BookOpen,
} from "lucide-react";
import usmanPhoto from "@/assets/usman.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Muhammad Usman — Aspiring Cloud Security Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Usman — Web & App Development learner at SMIT, Cloud Data Engineering in progress, aspiring Cloud Security Engineer based in Karachi.",
      },
    ],
  }),
});

const interests = [
  { icon: Code2, label: "Data Engineering" },
  { icon: Terminal, label: "Python & SQL" },
  { icon: Network, label: "Cloud Basics (AWS/GCP)" },
  { icon: Shield, label: "Linux & Networkxng" },
  { icon: Sparkles, label: "ETL & Data Pipelines" },
  { icon: Award, label: "Database Management" },
];

const skillGroups = [
  {
    title: "Data & Cloud Skills",
    items: ["Python (Basic Data Processing)", "SQL (Databases & Queries)", "Data Pipelines (Learning)", "Cloud Basics (AWS/GCP)"],
  },
  {
    title: "Databases & Data Handling",
    items: ["MySQL", "PostgreSQL", "Data Cleaning (Pandas)", "ETL Concepts (Extract, Transform, Load)"],
  },
  {
    title: "Linux & System Tools",
    items: ["Linux Basics", "Linux Commands", "Networking Basics", "VirtualBox", "Kali Linux (Basic Usage)"],
  },
  {
    title: "Web Development (Basic)",
    items: ["HTML", "CSS", "JavaScript (Basic)", "Git", "GitHub"],
  },
];

const education = [
  {
    school: "Saylani Mass I.T Training (SMIT)",
    field: "Cloud Data Engineering",
    period: "2025 – Present",
    detail:
      "Learning Cloud Data Engineering with a focus on Python, SQL, data pipelines, ETL concepts, and cloud fundamentals (AWS/GCP).",
    Icon: Cloud,
  },
  {
    school: "Saylani Mass I.T Training (SMIT)",
    field: "Web & App Development",
    period: "Apr 2025 – Present",
    detail:
      "Learning modern web and app development with hands-on projects. Skills: Git, GitHub, Front-End, JavaScript, HTML, CSS.",
    Icon: Code2,
  },
  {
    school: "Secondary School Certificate (Matric)",
    field: "Science",
    period: "Completed",
    detail:
      "Completed matriculation with a focus on Science subjects, building a foundation for further studies in technology.",
    Icon: BookOpen,
  },
];

const experience = [
  { label: "Linux Fundamentals", category: "Certification", link: "https://www.linkedin.com/in/usman-pro/" },
  { label: "Networking Basics", category: "Certification", link: "https://www.linkedin.com/in/usman-pro/" },
  { label: "Coding Hackathon", category: "Participation", link: "#" },
  { label: "Volunteer at SMIT", category: "Activity", link: "#" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// ── Background FX ─────────────────────────────────────────────────────────
function BackgroundFX() {
  // Generate stable particle positions
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: (i * 37 + 11) % 100,
    y: (i * 53 + 7) % 100,
    size: (i % 3) + 1.5,
    duration: 6 + (i % 8),
    delay: (i * 0.4) % 5,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.58 0.24 260) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.58 0.24 260) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute rounded-full opacity-20 dark:opacity-15 blur-[120px]"
        style={{ width: 600, height: 600, top: "-10%", left: "-10%", background: "oklch(0.58 0.24 260)" }}
        animate={{ x: [0, 60, -30, 0], y: [0, 40, 80, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full opacity-15 dark:opacity-10 blur-[140px]"
        style={{ width: 500, height: 500, top: "30%", right: "-10%", background: "oklch(0.72 0.18 200)" }}
        animate={{ x: [0, -50, 20, 0], y: [0, 60, -40, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full opacity-10 dark:opacity-8 blur-[100px]"
        style={{ width: 400, height: 400, bottom: "5%", left: "30%", background: "oklch(0.65 0.22 280)" }}
        animate={{ x: [0, 40, -20, 0], y: [0, -50, 30, 0], scale: [1, 1.2, 0.85, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40 dark:bg-primary/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, p.id % 2 === 0 ? 12 : -12, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

// ── Cursor glow spotlight ──────────────────────────────────────────────────
function CursorGlow() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Spring makes the glow lag slightly behind the cursor — feels organic
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      style={{ mixBlendMode: "normal" }}
    >
      {/* Outer soft halo */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, oklch(0.623 0.214 259.815 / 0.13) 0%, transparent 70%)",
        }}
      />
      {/* Inner bright core */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 180,
          height: 180,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, oklch(0.623 0.214 259.815 / 0.22) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

// ── Fade swap text ────────────────────────────────────────────────────────
function FadeSwapText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => {
        setPrev(i);
        return (i + 1) % words.length;
      });
    }, 3200);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <span className="relative inline-block min-h-[1.2em]">
      {words.map((word, i) => {
        const isActive = i === idx;
        const isLeaving = i === prev;
        return (
          <motion.span
            key={word}
            className={`text-primary ${isActive ? "relative" : "absolute top-0 left-0 pointer-events-none"}`}
            animate={
              isActive
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : isLeaving
                ? { opacity: 0, y: -16, filter: "blur(3px)" }
                : { opacity: 0, y: 16, filter: "blur(3px)" }
            }
            transition={
              isActive
                ? { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.45, ease: [0.55, 0, 1, 0.45] }
            }
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}

// ── Typewriter text ────────────────────────────────────────────────────────
function TypewriterText({ words }: { words: string[] }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[wordIdx];
      if (ref.current) {
        ref.current.textContent = current.slice(0, charIdx);
      }

      if (!deleting && charIdx === current.length) {
        // Pause at full word
        timer = setTimeout(() => { deleting = true; tick(); }, 1800);
        return;
      }
      if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
      }

      charIdx += deleting ? -1 : 1;
      timer = setTimeout(tick, deleting ? 45 : 80);
    };

    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <span className="text-primary">
      <span ref={ref} />
      <span className="animate-pulse">|</span>
    </span>
  );
}

// ── Cookie banner ─────────────────────────────────────────────────────────
function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("cookie-consent");
  });

  const dismiss = (accepted: boolean) => {
    localStorage.setItem("cookie-consent", accepted ? "accepted" : "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 100, opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
      className="cookie-card"
      style={{ cursor: "grab" }}
      whileDrag={{ cursor: "grabbing", scale: 1.03 }}
    >
      <svg id="cookieSvg" version="1.1" viewBox="0 0 122.88 122.25" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M101.77,49.38c2.09,3.1,4.37,5.11,6.86,5.78c2.45,0.66,5.32,0.06,8.7-2.01c1.36-0.84,3.14-0.41,3.97,0.95 c0.28,0.46,0.42,0.96,0.43,1.47c0.13,1.4,0.21,2.82,0.24,4.26c0.03,1.46,0.02,2.91-0.05,4.35h0v0c0,0.13-0.01,0.26-0.03,0.38 c-0.91,16.72-8.47,31.51-20,41.93c-11.55,10.44-27.06,16.49-43.82,15.69v0.01h0c-0.13,0-0.26-0.01-0.38-0.03 c-16.72-0.91-31.51-8.47-41.93-20C5.31,90.61-0.73,75.1,0.07,58.34H0.07v0c0-0.13,0.01-0.26,0.03-0.38 C1,41.22,8.81,26.35,20.57,15.87C32.34,5.37,48.09-0.73,64.85,0.07V0.07h0c1.6,0,2.89,1.29,2.89,2.89c0,0.4-0.08,0.78-0.23,1.12 c-1.17,3.81-1.25,7.34-0.27,10.14c0.89,2.54,2.7,4.51,5.41,5.52c1.44,0.54,2.2,2.1,1.74,3.55l0.01,0 c-1.83,5.89-1.87,11.08-0.52,15.26c0.82,2.53,2.14,4.69,3.88,6.4c1.74,1.72,3.9,3,6.39,3.78c4.04,1.26,8.94,1.18,14.31-0.55 C99.73,47.78,101.08,48.3,101.77,49.38L101.77,49.38z M59.28,57.86c2.77,0,5.01,2.24,5.01,5.01c0,2.77-2.24,5.01-5.01,5.01 c-2.77,0-5.01-2.24-5.01-5.01C54.27,60.1,56.52,57.86,59.28,57.86L59.28,57.86z M37.56,78.49c3.37,0,6.11,2.73,6.11,6.11 s-2.73,6.11-6.11,6.11s-6.11-2.73-6.11-6.11S34.18,78.49,37.56,78.49L37.56,78.49z M50.72,31.75c2.65,0,4.79,2.14,4.79,4.79 c0,2.65-2.14,4.79-4.79,4.79c-2.65,0-4.79-2.14-4.79-4.79C45.93,33.89,48.08,31.75,50.72,31.75L50.72,31.75z M119.3,32.4 c1.98,0,3.58,1.6,3.58,3.58c0,1.98-1.6,3.58-3.58,3.58s-3.58-1.6-3.58-3.58C115.71,34.01,117.32,32.4,119.3,32.4L119.3,32.4z M93.62,22.91c2.98,0,5.39,2.41,5.39,5.39c0,2.98-2.41,5.39-5.39,5.39c-2.98,0-5.39-2.41-5.39-5.39 C88.23,25.33,90.64,22.91,93.62,22.91L93.62,22.91z M97.79,0.59c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78C92.02,3.17,94.6,0.59,97.79,0.59L97.79,0.59z M76.73,80.63c4.43,0,8.03,3.59,8.03,8.03 c0,4.43-3.59,8.03-8.03,8.03s-8.03-3.59-8.03-8.03C68.7,84.22,72.29,80.63,76.73,80.63L76.73,80.63z M31.91,46.78 c4.8,0,8.69,3.89,8.69,8.69c0,4.8-3.89,8.69-8.69,8.69s-8.69-3.89-8.69-8.69C23.22,50.68,27.11,46.78,31.91,46.78L31.91,46.78z M107.13,60.74c-3.39-0.91-6.35-3.14-8.95-6.48c-5.78,1.52-11.16,1.41-15.76-0.02c-3.37-1.05-6.32-2.81-8.71-5.18 c-2.39-2.37-4.21-5.32-5.32-8.75c-1.51-4.66-1.69-10.2-0.18-16.32c-3.1-1.8-5.25-4.53-6.42-7.88c-1.06-3.05-1.28-6.59-0.61-10.35 C47.27,5.95,34.3,11.36,24.41,20.18C13.74,29.69,6.66,43.15,5.84,58.29l0,0.05v0h0l-0.01,0.13v0C5.07,73.72,10.55,87.82,20.02,98.3 c9.44,10.44,22.84,17.29,38,18.1l0.05,0h0v0l0.13,0.01h0c15.24,0.77,29.35-4.71,39.83-14.19c10.44-9.44,17.29-22.84,18.1-38l0-0.05 v0h0l0.01-0.13v0c0.07-1.34,0.09-2.64,0.06-3.91C112.98,61.34,109.96,61.51,107.13,60.74L107.13,60.74z" />
        </g>
      </svg>
      <p className="cookieHeading">We use cookies.</p>
      <p className="cookieDescription">This website uses cookies to ensure you get the best experience on our site.</p>
      <div className="buttonContainer">
        <button className="acceptButton" onClick={() => dismiss(true)}>Allow</button>
        <button className="declineButton" onClick={() => dismiss(false)}>Decline</button>
      </div>
    </motion.div>
  );
}

// ── Theme hook ────────────────────────────────────────────────────────────
function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

// ── Tech logo ticker data ─────────────────────────────────────────────────
const techLogos = [
  {
    name: "Linux",
    color: "#FCC624",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="currentColor">
        <path d="M24 3C13.5 3 5 11.5 5 22c0 5.8 2.4 11 6.3 14.7L9 43h30l-2.3-6.3C40.6 33 43 27.8 43 22 43 11.5 34.5 3 24 3zm0 4c8.3 0 15 6.7 15 15 0 4.1-1.7 7.9-4.4 10.6L32 38H16l-2.6-5.4C10.7 29.9 9 26.1 9 22c0-8.3 6.7-15 15-15zm-5.5 9a2 2 0 100 4 2 2 0 000-4zm11 0a2 2 0 100 4 2 2 0 000-4zm-5.5 5c-3.3 0-6 2.7-6 6h12c0-3.3-2.7-6-6-6z" />
      </svg>
    ),
  },
  {
    name: "Kali Linux",
    color: "#557C94",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="currentColor">
        <path d="M24 5L5 41h38L24 5zm0 9l13 22H11L24 14z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    color: "#E44D26",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7">
        <path fill="#E44D26" d="M8 4l3.5 39L24 47l12.5-4L40 4z" />
        <path fill="#F16529" d="M24 44.5l10.1-2.8 3-33.7H24z" />
        <path fill="#EBEBEB" d="M24 20h-6.5l-.4-5H24v-5H12.6l1.3 14H24zm0 13.5l-.1.1-5.1-1.4-.3-3.6H13l.6 7 10.3 2.9.1-.1z" />
        <path fill="#fff" d="M24 20v5h6l-.6 6.5-5.4 1.5v5.2l10.3-2.9 1.5-17.3z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7">
        <path fill="#1572B6" d="M8 4l3.5 39L24 47l12.5-4L40 4z" />
        <path fill="#33A9DC" d="M24 44.5l10.1-2.8 3-33.7H24z" />
        <path fill="#fff" d="M24 20h6.5l-.4 5H24v5h5.7l-.6 6.5-5.1 1.5v5.2l10.3-2.9 1.5-17.3H24zm0-10h13.4l-.4 5H24z" />
        <path fill="#EBEBEB" d="M24 10H10.6l.4 5H24zm0 10H12.6l.4 5H24zm0 10h-5.8l.3 3.6 5.5 1.5z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7">
        <path fill="#F7DF1E" d="M6 6h36v36H6z" />
        <path d="M29.6 36.2c.7 1.2 1.6 2 3.2 2 1.3 0 2.2-.7 2.2-1.6 0-1.1-.9-1.5-2.4-2.1l-.8-.4c-2.4-1-4-2.3-4-5 0-2.5 1.9-4.4 4.8-4.4 2.1 0 3.6.7 4.7 2.6l-2.6 1.7c-.6-1-1.1-1.4-2.1-1.4-1 0-1.6.6-1.6 1.4 0 1 .6 1.4 2 2l.8.4c2.8 1.2 4.4 2.4 4.4 5.2 0 3-2.3 4.6-5.4 4.6-3 0-5-1.5-5.9-3.4l2.7-1.6zm-11.4.3c.5.9.9 1.7 2 1.7.9 0 1.5-.4 1.5-1.8V25h3.3v11.5c0 3-1.7 4.3-4.2 4.3-2.3 0-3.6-1.2-4.3-2.6l2.7-1.7z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#e2e8f0",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="currentColor">
        <circle cx="24" cy="24" r="20" fill="#000" />
        <path fill="#fff" d="M16 16h4v10.5l10-10.5h5L24 28l12 12h-5L20 28.5V40h-4z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7">
        <path fill="#F05032" d="M44.5 21.5l-18-18a3 3 0 00-4.24 0l-4.24 4.24 5.37 5.37a3.57 3.57 0 014.52 4.52l5.18 5.18a3.57 3.57 0 11-2.14 2.14l-4.83-4.83v12.7a3.57 3.57 0 11-2.93-.07V20.1a3.57 3.57 0 01-1.94-4.68L16.1 10.1 3.5 22.7a3 3 0 000 4.24l18 18a3 3 0 004.24 0l18.76-18.76a3 3 0 000-4.68z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    color: "#e2e8f0",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="currentColor">
        <path d="M24 4C12.95 4 4 12.95 4 24c0 8.84 5.73 16.33 13.67 18.97.99.18 1.36-.43 1.36-.96v-3.36c-5.56 1.21-6.73-2.68-6.73-2.68-.91-2.31-2.22-2.92-2.22-2.92-1.81-1.24.14-1.21.14-1.21 2 .14 3.06 2.06 3.06 2.06 1.78 3.05 4.67 2.17 5.81 1.66.18-1.29.7-2.17 1.27-2.67-4.44-.5-9.1-2.22-9.1-9.88 0-2.18.78-3.97 2.06-5.37-.21-.5-.89-2.54.19-5.3 0 0 1.68-.54 5.5 2.05A19.14 19.14 0 0124 13.6c1.7.01 3.41.23 5.01.67 3.81-2.59 5.49-2.05 5.49-2.05 1.09 2.76.4 4.8.2 5.3 1.28 1.4 2.05 3.19 2.05 5.37 0 7.68-4.67 9.37-9.12 9.86.72.62 1.36 1.84 1.36 3.71v5.5c0 .53.36 1.15 1.37.96C38.28 40.32 44 32.84 44 24c0-11.05-8.95-20-20-20z" />
      </svg>
    ),
  },
  {
    name: "Wireshark",
    color: "#1679A7",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
        <rect width="48" height="48" rx="8" fill="#1679A7" />
        <path d="M10 30c2-8 4-12 7-12s5 8 7 8 4-12 7-12 5 8 7 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 24c1-4 2-6 4-6s3 4 4 4 2-6 4-6 3 4 4 4 2-6 4-6 3 4 4 4 2-4 4-4" stroke="#A8D8EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "VirtualBox",
    color: "#0071C5",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none">
        <rect width="48" height="48" rx="8" fill="#183A61" />
        <rect x="8" y="14" width="22" height="16" rx="2" fill="#0071C5" />
        <rect x="18" y="20" width="22" height="16" rx="2" fill="#00ADEF" opacity="0.85" />
      </svg>
    ),
  },
  {
    name: "Networking",
    color: "#60a5fa",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <circle cx="24" cy="10" r="4" fill="currentColor" stroke="none" />
        <circle cx="10" cy="36" r="4" fill="currentColor" stroke="none" />
        <circle cx="38" cy="36" r="4" fill="currentColor" stroke="none" />
        <path d="M24 14v8M24 22l-14 8M24 22l14 8" />
      </svg>
    ),
  },
  {
    name: "CEH",
    color: "#34d399",
    svg: (
      <svg viewBox="0 0 48 48" className="h-7 w-7" fill="currentColor">
        <path d="M24 4L6 12v12c0 10.5 7.7 20.3 18 22.7C34.3 44.3 42 34.5 42 24V12L24 4zm0 4.5l14 6.3V24c0 8.4-6.1 16.2-14 18.5C16.1 40.2 10 32.4 10 24V14.8l14-6.3z" />
        <path d="M20 24l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

function TechTicker() {
  const items = [...techLogos, ...techLogos];
  return (
    <div className="relative border-y border-border/60 bg-secondary/20 py-5 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground select-none whitespace-nowrap"
          >
            <span style={{ color: tech.color }}>{tech.svg}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Portfolio() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sections = ["top", "about", "skills", "education", "certifications", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: "-60px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden pt-20">
      <BackgroundFX />
      <CursorGlow />
      <CookieBanner />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? "all" : "none" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-background"
      >
        <div className="loader">
          <svg id="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
              <filter id="roundness">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" />
              </filter>
              <mask id="shapes">
                <g fill="white">
                  <polygon points="50 37.5 80 75 20 75 50 37.5" />
                  <circle cx="20" cy="60" r="15" />
                  <circle cx="80" cy="60" r="15" />
                  <g>
                    <circle cx="20" cy="60" r="15" />
                    <circle cx="20" cy="60" r="15" />
                    <circle cx="20" cy="60" r="15" />
                  </g>
                </g>
              </mask>
              <mask id="clipping" clipPathUnits="userSpaceOnUse">
                <g id="lines" filter="url(#roundness)">
                  <g mask="url(#shapes)" stroke="white">
                    {[-40,-31,-22,-13,-4,5,14,23,32,41,50,59,68,77,86,95,104,113,122,131,140].map((y) => (
                      <line key={y} x1="-50" y1={y} x2="150" y2={y} />
                    ))}
                  </g>
                </g>
              </mask>
            </defs>
            <rect x="0" y="0" width="100" height="100" rx="0" ry="0" mask="url(#clipping)" />
            <g>
              <path d="M33.52,68.12 C35.02,62.8 39.03,58.52 44.24,56.69 C49.26,54.93 54.68,55.61 59.04,58.4 C59.04,58.4 56.24,60.53 56.24,60.53 C55.45,61.13 55.68,62.37 56.63,62.64 C56.63,62.64 67.21,65.66 67.21,65.66 C67.98,65.88 68.75,65.3 68.74,64.5 C68.74,64.5 68.68,53.5 68.68,53.5 C68.67,52.51 67.54,51.95 66.75,52.55 C66.75,52.55 64.04,54.61 64.04,54.61 C57.88,49.79 49.73,48.4 42.25,51.03 C35.2,53.51 29.78,59.29 27.74,66.49 C27.29,68.08 28.22,69.74 29.81,70.19 C30.09,70.27 30.36,70.31 30.63,70.31 C31.94,70.31 33.14,69.44 33.52,68.12Z" />
              <path d="M69.95,74.85 C68.35,74.4 66.7,75.32 66.25,76.92 C64.74,82.24 60.73,86.51 55.52,88.35 C50.51,90.11 45.09,89.43 40.73,86.63 C40.73,86.63 43.53,84.51 43.53,84.51 C44.31,83.91 44.08,82.67 43.13,82.4 C43.13,82.4 32.55,79.38 32.55,79.38 C31.78,79.16 31.02,79.74 31.02,80.54 C31.02,80.54 31.09,91.54 31.09,91.54 C31.09,92.53 32.22,93.09 33.01,92.49 C33.01,92.49 35.72,90.43 35.72,90.43 C39.81,93.63 44.77,95.32 49.84,95.32 C52.41,95.32 55,94.89 57.51,94.01 C64.56,91.53 69.99,85.75 72.02,78.55 C72.47,76.95 71.54,75.3 69.95,74.85Z" />
            </g>
          </svg>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 text-sm font-medium tracking-widest uppercase text-muted-foreground"
        >
          Muhammad Usman
        </motion.p>
      </motion.div>
      {/* Nav */}
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-3xl relative">
          {/* Main navbar pill */}
          <motion.header
            className="w-full rounded-full border border-border/40 bg-background/90 shadow-lg shadow-black/10"
            style={{ backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)" }}
          >
            <div className="flex items-center justify-between px-5 py-2.5">
              {/* Logo */}
              <a
                href="#top"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="text-sm font-bold tracking-tight text-foreground hover:text-primary transition-colors"
              >
                Usman<span className="text-primary">.</span>
              </a>

              {/* Desktop Nav links */}
              <nav className="hidden md:flex items-center gap-0.5">
                {[
                  { label: "About", id: "about" },
                  { label: "Skills", id: "skills" },
                  { label: "Education", id: "education" },
                  { label: "Certifications", id: "certifications" },
                  { label: "Projects", id: "projects" },
                  { label: "Contact", id: "contact" },
                ].map(({ label, id }) => {
                  const isActive = activeSection === id;
                  return (
                    <button
                      key={id}
                      onClick={() => {
                        const el = document.getElementById(id);
                        if (el) { el.style.opacity = "1"; el.scrollIntoView({ behavior: "smooth" }); }
                      }}
                      className={`relative rounded-full px-3.5 py-1.5 text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-primary -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {label}
                    </button>
                  );
                })}
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-3">
                {/* Theme toggle */}
                <div className="theme-bg">
                  <button className="change-theme__icon" onClick={toggle} aria-label="Toggle dark mode">
                    <div className="icon-sun">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
                        <path fill="#1c1c1e" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" clipRule="evenodd" fillRule="evenodd"/>
                        <path fill="#1c1c1e" d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z" clipRule="evenodd" fillRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="icon-moon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20" width="20">
                        <path fill="#f2f2f7" d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z" clipRule="evenodd" fillRule="evenodd"/>
                      </svg>
                    </div>
                  </button>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="hidden md:inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm shadow-primary/30 transition-all duration-200 hover:bg-primary/85 hover:-translate-y-px"
                >
                  Hire me <ArrowRight className="h-3 w-3" />
                </a>
                {/* Hamburger */}
                <label className="hamburger md:hidden">
                  <input
                    type="checkbox"
                    checked={mobileOpen}
                    onChange={() => setMobileOpen((o) => !o)}
                    aria-label="Toggle menu"
                  />
                  <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
                    <path className="line" d="M7 16 27 16" />
                  </svg>
                </label>
              </div>
            </div>
          </motion.header>

          {/* Mobile dropdown — outside the pill so it's not clipped */}
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border border-border/40 bg-background/95 shadow-xl shadow-black/10 overflow-hidden"
              style={{ backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)" }}
            >
              <div className="flex flex-col gap-1 p-3">
                {[
                  { label: "About", id: "about" },
                  { label: "Skills", id: "skills" },
                  { label: "Education", id: "education" },
                  { label: "Certifications", id: "certifications" },
                  { label: "Projects", id: "projects" },
                  { label: "Contact", id: "contact" },
                ].map(({ label, id }) => {
                  const isActive = activeSection === id;
                  return (
                    <button
                      key={id}
                      onClick={() => {
                        const el = document.getElementById(id);
                        if (el) { el.style.opacity = "1"; el.scrollIntoView({ behavior: "smooth" }); }
                        setMobileOpen(false);
                      }}
                      className={`w-full text-left rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200 ${
                        isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) { el.style.opacity = "1"; el.scrollIntoView({ behavior: "smooth" }); }
                    setMobileOpen(false);
                  }}
                  className="mt-1 w-full flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/85 transition-all"
                >
                  Hire me <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hero */}
      <section id="top" className="relative">
        {/* Animated background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            aria-hidden
            className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute top-40 -right-32 h-[480px] w-[480px] rounded-full bg-sky-300/30 blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-indigo-300/25 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pt-20 pb-24 md:grid-cols-[1.3fr_1fr] md:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              Available for internships & collaborations
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
            >
              <span className="block">Aspiring</span>
              <span className="block min-h-[1.3em]">
                <TypewriterText
                  words={[
                    "Cloud Data Engineer",
                    "Data Pipeline Builder",
                    "Python & SQL Developer",
                    "Linux & Networking Learner",
                  ]}
                />
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Currently building hands-on skills in Python, SQL, and cloud data engineering projects.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Karachi, Pakistan
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> SMIT
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/usman-pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  500+ LinkedIn Connections
                </a>
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Contact me <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#skills"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                onClick={(e) => { e.preventDefault(); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                View skills
              </a>
            </motion.div>

          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Rotating gradient ring */}
            <motion.div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.623 0.214 259.815), oklch(0.75 0.18 230), oklch(0.55 0.22 270), oklch(0.623 0.214 259.815))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-2xl shadow-primary/20"
            >
              <img
                src={usmanPhoto}
                alt="Portrait of Muhammad Usman"
                className="aspect-[4/5] w-full object-cover"
              />
              {/* Floating chip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/40 px-4 py-3 text-xs text-white backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-medium">Open to opportunities</span>
                </div>
                <span className="text-white/60">Karachi · PK</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Ticker */}
      <TechTicker />

      {/* About */}
      <AnimatedSection id="about" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>About</SectionLabel>
          <div className="mt-6 grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1 flex flex-col items-center gap-4">
              <h2 className="text-3xl font-semibold tracking-tight">
                Always curious. Always learning. Always growing.
              </h2>
              {/* @ts-ignore — web component */}
              <dotlottie-wc
                src="https://lottie.host/de71a718-5fa5-4526-9fd9-f78eecd396ed/94DFnxpOyL.lottie"
                style={{ width: "340px", height: "340px" }}
                autoplay
                loop
              />
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-2">
              <p>
                My long-term goal is to build a career in Cloud Security and
                Cybersecurity. To create a strong foundation, I'm learning programming
                and development because understanding how applications and systems are
                built helps develop deeper security knowledge.
              </p>
              <p>
                Currently focusing on Web & App Development at SMIT and Cloud Data
                Engineering (in progress) to strengthen my technical foundation and gain
                practical experience.
              </p>
              <p>
                I enjoy exploring different areas of tech, building practical knowledge,
                and connecting with like-minded people.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((i, idx) => (
              <motion.div
                key={i.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-xl border border-border/70 bg-background px-4 py-3.5 text-sm font-medium"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <i.icon className="h-4 w-4" />
                </span>
                {i.label}
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
          Tools and technologies I'm learning and working with.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border/70 bg-card p-6 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {g.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection id="education" className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel>Education</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
            Academic journey & learning path.
          </h2>

          {/* Timeline */}
          <div className="mt-12 relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/60 hidden md:block" />
            {/* Mobile left line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border/60 md:hidden" />

            <div className="space-y-10">
              {education.map((e, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={e.school}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: idx * 0.12 }}
                    className="relative flex items-start md:justify-center pl-10 md:pl-0"
                  >
                    {/* Mobile dot */}
                    <div className="absolute left-[6px] top-3 h-8 w-8 rounded-full border-2 border-primary bg-background z-10 md:hidden flex items-center justify-center text-primary">
                      <e.Icon className="h-4 w-4" />
                    </div>
                    {idx === 0 && <span className="absolute left-[6px] top-3 h-8 w-8 rounded-full bg-primary/20 animate-ping md:hidden" />}

                    {/* Desktop layout */}
                    <div className="hidden md:flex w-full items-start gap-0">
                      {/* Left card */}
                      <div className={`w-[calc(50%-28px)] ${isLeft ? "block" : "invisible"}`}>
                        {isLeft && (
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="rounded-2xl border border-border/70 bg-background p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-right"
                          >
                            <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">{e.period}</span>
                            <h3 className="mt-2 text-base font-bold text-foreground">{e.school}</h3>
                            <p className="text-sm font-medium text-muted-foreground">{e.field}</p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                          </motion.div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="relative flex flex-col items-center mx-4 mt-2">
                        <div className="h-10 w-10 rounded-full border-2 border-primary bg-background z-10 flex items-center justify-center text-primary shadow-md shadow-primary/20">
                          <e.Icon className="h-5 w-5" />
                        </div>
                        {idx === 0 && <span className="absolute top-0 h-10 w-10 rounded-full bg-primary/20 animate-ping" />}
                      </div>

                      {/* Right card */}
                      <div className={`w-[calc(50%-28px)] ${!isLeft ? "block" : "invisible"}`}>
                        {!isLeft && (
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="rounded-2xl border border-border/70 bg-background p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                          >
                            <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">{e.period}</span>
                            <h3 className="mt-2 text-base font-bold text-foreground">{e.school}</h3>
                            <p className="text-sm font-medium text-muted-foreground">{e.field}</p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Mobile card */}
                    <div className="md:hidden w-full rounded-2xl border border-border/70 bg-background p-5 hover:border-primary/40 transition-all duration-300">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">{e.period}</span>
                      <h3 className="mt-2 text-base font-bold text-foreground">{e.school}</h3>
                      <p className="text-sm font-medium text-muted-foreground">{e.field}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection id="certifications" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Certifications & Activities</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
          Learning highlights that shaped my technical foundation.
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((x, idx) => (
            <motion.div
              key={x.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border/70 bg-card p-6 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {x.category}
              </p>
              <p className="mt-3 text-base font-semibold">{x.label}</p>
              <a
                href={x.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1 text-xs text-muted-foreground transition group-hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">View</span>
              </a>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Projects */}
      <AnimatedSection id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight">
          Things I've built while learning.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Data Pipeline (Learning Project)",
              desc: "Built a simple workflow to process and organize data.",
              tags: ["Python", "SQL", "Data Engineering"],
              color: "from-blue-500/20 to-indigo-500/20",
              iconColor: "text-blue-400",
              iconBg: "bg-blue-500/10",
              Icon: Cloud,
              link: "#",
            },
            {
              title: "Linux Lab Setup",
              desc: "Configured Ubuntu/Kali lab in VirtualBox for hands-on learning and networking practice.",
              tags: ["Linux", "VirtualBox", "Kali Linux"],
              color: "from-emerald-500/20 to-teal-500/20",
              iconColor: "text-emerald-400",
              iconBg: "bg-emerald-500/10",
              Icon: Terminal,
              link: "#",
            },
            {
              title: "Network Analysis Lab",
              desc: "Used Wireshark to understand network traffic and packet analysis concepts.",
              tags: ["Wireshark", "Networking"],
              color: "from-orange-500/20 to-red-500/20",
              iconColor: "text-orange-400",
              iconBg: "bg-orange-500/10",
              Icon: Wifi,
              link: "#",
            },
            {
              title: "SQL Database Project",
              desc: "Created and managed a database with queries and relationships.",
              tags: ["SQL", "Database"],
              color: "from-purple-500/20 to-pink-500/20",
              iconColor: "text-purple-400",
              iconBg: "bg-purple-500/10",
              Icon: Database,
              link: "#",
            },
            {
              title: "Cloud Research Project",
              desc: "Explored cloud concepts, storage, and cloud fundamentals.",
              tags: ["Cloud", "Research"],
              color: "from-sky-500/20 to-blue-500/20",
              iconColor: "text-sky-400",
              iconBg: "bg-sky-500/10",
              Icon: Server,
              link: "#",
            },
          ].map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col rounded-2xl border border-border/70 bg-card overflow-hidden transition hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} opacity-80`} />
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${project.iconBg} ${project.iconColor}`}>
                    <project.Icon className="h-5 w-5" />
                  </div>
                  <a
                    href={project.link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs font-medium text-primary"
                  >
                    View <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border/60 bg-foreground text-background">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">

            {/* Left — heading + socials */}
            <div className="flex-1">
              <SectionLabel className="text-background/60">Contact</SectionLabel>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-4 max-w-lg text-4xl font-semibold tracking-tight md:text-5xl"
              >
                Let's connect and grow together.
              </motion.h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                I'm open to learning opportunities, internships, hackathons, and conversations
                with anyone passionate about tech, development, or cybersecurity.
              </p>

              <div className="mt-10">
                <ul className="example-2">
                  {/* X / Twitter */}
                  <li className="icon-content">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" data-social="twitter" aria-label="X / Twitter">
                      <div className="filled" />
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                      </svg>
                    </a>
                    <div className="tooltip">Twitter</div>
                  </li>
                  {/* Instagram */}
                  <li className="icon-content">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" data-social="instagram" aria-label="Instagram">
                      <div className="filled" />
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </a>
                    <div className="tooltip">Instagram</div>
                  </li>
                  {/* LinkedIn */}
                  <li className="icon-content">
                    <a href="https://www.linkedin.com/in/usman-pro/" target="_blank" rel="noopener noreferrer" data-social="linkedin" aria-label="LinkedIn">
                      <div className="filled" />
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </a>
                    <div className="tooltip">LinkedIn</div>
                  </li>
                  {/* GitHub */}
                  <li className="icon-content">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" data-social="github" aria-label="GitHub">
                      <div className="filled" />
                      <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                      </svg>
                    </a>
                    <div className="tooltip">GitHub</div>
                  </li>
                  {/* Facebook */}
                  <li className="icon-content">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-social="facebook" aria-label="Facebook">
                      <div className="filled" />
                      <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                      </svg>
                    </a>
                    <div className="tooltip">Facebook</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right — contact card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[380px] shrink-0"
            >
              <div className="rounded-2xl border border-white/10 bg-neutral-800 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">Reach me directly</p>

                {/* Email */}
                <a
                  href="mailto:truemusman@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-neutral-700 bg-neutral-900 p-4 transition-all duration-200 hover:bg-neutral-700 hover:border-primary/60 mb-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-sky-400 truncate group-hover:text-sky-300 transition-colors">truemusman@gmail.com</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-primary ml-auto shrink-0 transition-colors" />
                </a>

                {/* Phone */}
                <a
                  href="tel:+923141162973"
                  className="group flex items-center gap-4 rounded-xl border border-neutral-700 bg-neutral-900 p-4 transition-all duration-200 hover:bg-neutral-700 hover:border-primary/60"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 mb-0.5">Phone / WhatsApp</p>
                    <p className="text-sm font-semibold text-sky-400 group-hover:text-sky-300 transition-colors">+92 314 116 2973</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-neutral-500 group-hover:text-primary ml-auto shrink-0 transition-colors" />
                </a>

                <p className="mt-5 text-center text-xs text-neutral-500">Usually responds within 24 hours</p>
              </div>
            </motion.div>

          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Muhammad Usman. All rights reserved.</p>
            <p>Karachi, Pakistan</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function AnimatedSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground ${className}`}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </div>
  );
}
