"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActive] = useState("home");
    const audioCtxRef = useRef<AudioContext | null>(null);

    /* ── Scroll shadow ─────────────────────────────────────────────────── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* ── Active section via IntersectionObserver ───────────────────────── */
    useEffect(() => {
        const ids = NAV_LINKS.map((l) => l.href.slice(1));
        const observers: IntersectionObserver[] = [];

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { threshold: 0.4 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    /* ── Mouse click sound (Web Audio API) ────────────────────────────── */
    const playClick = useCallback(() => {
        try {
            if (!audioCtxRef.current) {
                audioCtxRef.current = new AudioContext();
            }
            const ctx = audioCtxRef.current;

            const play = () => {
                // Short white-noise burst — mimics a mechanical mouse click
                const bufferSize = ctx.sampleRate * 0.04; // 40ms
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = (Math.random() * 2 - 1);
                }

                const noise = ctx.createBufferSource();
                noise.buffer = buffer;

                // High-pass filter — removes low rumble, keeps the crisp click
                const filter = ctx.createBiquadFilter();
                filter.type = "highpass";
                filter.frequency.value = 1000;

                // Gain envelope — sharp attack, very fast decay
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0, ctx.currentTime);
                gain.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.002);  // 2ms attack
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04); // 40ms decay

                noise.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);

                noise.start(ctx.currentTime);
                noise.stop(ctx.currentTime + 0.04);
            };

            if (ctx.state === "suspended") {
                ctx.resume().then(play);
            } else {
                play();
            }
        } catch {
            /* AudioContext blocked — silently ignore */
        }
    }, []);

    const toggleMenu = () => {
        playClick();
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            className={[
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[var(--bg-primary)]/90 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
                    : "bg-transparent",
            ].join(" ")}
        >
            <nav className="container-custom flex items-center justify-between h-16">

                {/* Logo */}
                <a href="#home" className="text-xl font-bold tracking-tight select-none">
                    <span className="text-[var(--accent)]">{"{ }"}</span>
                    <span className="text-[var(--text-primary)]"> Md Farzan Akhtar</span>
                </a>

                {/* Desktop links — centered */}
                <ul className="hidden md:flex items-center gap-8 list-none">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className={`nav-link ${activeSection === href.slice(1) ? "active" : ""}`}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    data-open={menuOpen ? "true" : "false"}
                    className="hamburger-btn"
                >
                    <span className="hamburger-line hamburger-line--top" />
                    <span className="hamburger-line hamburger-line--mid" />
                    <span className="hamburger-line hamburger-line--bot" />
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                className={[
                    "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
            >
                <ul className="flex flex-col bg-[var(--bg-secondary)] border-t border-[var(--border)] shadow-lg list-none">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                onClick={closeMenu}
                                className={[
                                    "block px-6 py-4 text-sm font-medium border-b border-[var(--border)] transition-colors duration-200",
                                    activeSection === href.slice(1)
                                        ? "text-[var(--accent)] bg-[var(--accent-glow)]"
                                        : "text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-primary)]",
                                ].join(" ")}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
