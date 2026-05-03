"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = ["Full Stack Developer", "React Developer", "Next.js Developer", "UI/UX Enthusiast"];

export default function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [typing, setTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    /* ── Typewriter effect ─────────────────────────────────────────────── */
    useEffect(() => {
        const current = ROLES[roleIndex];

        if (typing) {
            if (charIndex < current.length) {
                const t = setTimeout(() => {
                    setDisplayed(current.slice(0, charIndex + 1));
                    setCharIndex((c) => c + 1);
                }, 70);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setTyping(false), 1800);
                return () => clearTimeout(t);
            }
        } else {
            if (charIndex > 0) {
                const t = setTimeout(() => {
                    setDisplayed(current.slice(0, charIndex - 1));
                    setCharIndex((c) => c - 1);
                }, 40);
                return () => clearTimeout(t);
            } else {
                setRoleIndex((i) => (i + 1) % ROLES.length);
                setTyping(true);
            }
        }
    }, [charIndex, typing, roleIndex]);

    return (
        <section
            id="home"
            className="section min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Background soft blobs */}
            <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-[rgba(91,94,244,0.08)] blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgba(167,139,250,0.07)] blur-3xl" />
            </div>

            <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text */}
                <div className="animate-fade-in-up">
                    <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">
                        Hello, World! 👋
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        I&apos;m{" "}
                        <span className="gradient-text">Md Farzan</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-secondary)] mb-6 min-h-8">
                        <span className="text-accent">{displayed}</span>
                        <span className="animate-pulse text-accent">|</span>
                    </h2>

                    <p className="hero-description text-[var(--text-secondary)] max-w-md leading-relaxed">
                        I craft clean, performant web experiences with modern technologies.
                        A passionate Frontend Web Developer based In WestBengal, India.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-5 mt-5">
                        <a href="#portfolio" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get In Touch
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-3 mt-8">
                        <a href="https://github.com/codewithfarzu?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/md-farzan-akhtar-b2a068255/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="mailto:mdfarzan78@gmail.com" aria-label="Email" className="social-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                        <a href="tel:+91 8900406038" aria-label="Call" className="social-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Avatar / illustration */}
                <div className="flex justify-center animate-fade-in-up animate-delay-200">
                    <div className="relative">
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-accent)] glow-pulse flex items-center justify-center overflow-hidden">
                            {/* Placeholder avatar — replace src with your photo */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--accent-glow)] to-[var(--bg-primary)]">
                                {/* <svg viewBox="0 0 100 100" className="w-40 h-40 text-[var(--text-muted)]"
                                    fill="currentColor" aria-hidden="true">
                                    <circle cx="50" cy="38" r="20" />
                                    <ellipse cx="50" cy="80" rx="30" ry="20" />
                                </svg> */}
                                <Image src="/profile-img/my-img.png" alt="Profile Picture" width={500} height={500} loading="eager" />
                            </div>
                        </div>
                        {/* Floating badge */}
                        {/* <div className="absolute -bottom-3 -right-3 bg-white border border-[var(--border)] shadow-md rounded-xl px-3 py-2 text-xs font-mono">
                            <span className="text-[var(--accent)] font-bold">2+</span>
                            <span className="text-[var(--text-secondary)] ml-1">yrs exp</span>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
                <span className="text-[var(--text-muted)] text-xs font-mono">scroll</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-muted)]" aria-hidden="true">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
            </div>
        </section>
    );
}
