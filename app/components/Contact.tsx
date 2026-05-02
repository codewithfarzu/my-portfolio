"use client";

import { useState, FormEvent } from "react";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const CONTACT_INFO = [
    {
        label: "Email",
        value: "mdfarzan78@gmail.com",
        href: "mailto:mdfarzan78@gmail.com",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        label: "Location",
        value: "West Bengal, India",
        href: "https://maps.app.goo.gl/jJ2XkCZmdxukqX1v6",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "Phone",
        value: "+91 8900 40 6038",
        href: "tel:+918900406038",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
            </svg>
        ),
    },
];

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<Status>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        /* Replace this with your actual form submission logic (e.g. Formspree, EmailJS) */
        await new Promise((r) => setTimeout(r, 1200));
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setStatus("idle"), 4000);
    };

    return (
        <section id="contact" className="section">
            <div className="container-custom">
                {/* Heading */}
                <h2 className="section-title">
                    Get In <span>Touch</span>
                </h2>
                <div className="section-underline" />

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left — info */}
                    <div>
                        <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                            Have a project in mind or just want to say hi? My inbox is always open.
                            I&apos;ll get back to you as soon as possible!
                        </p>

                        <ul className="flex flex-col gap-5 mb-8 list-none">
                            {CONTACT_INFO.map(({ label, value, href, icon }) => (
                                <li key={label} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center text-accent shrink-0">
                                        {icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-[var(--text-muted)] font-mono mb-0.5">{label}</p>
                                        <a
                                            href={href}
                                            className="text-sm text-[var(--text-primary)] hover:text-accent transition-colors duration-200"
                                        >
                                            {value}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Social */}
                        <div className="flex gap-3">
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
                        </div>
                    </div>

                    {/* Right — form */}
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-xs text-[var(--text-muted)] font-mono mb-1.5">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs text-[var(--text-muted)] font-mono mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="john@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-xs text-[var(--text-muted)] font-mono mb-1.5">
                                Subject
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                placeholder="Project Inquiry"
                                value={form.subject}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs text-[var(--text-muted)] font-mono mb-1.5">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                className="form-input resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? (
                                <>
                                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity=".25" />
                                        <path d="M21 12a9 9 0 00-9-9" />
                                    </svg>
                                    Sending…
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <line x1="22" y1="2" x2="11" y2="13" />
                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                    </svg>
                                    Send Message
                                </>
                            )}
                        </button>

                        {status === "success" && (
                            <p role="status" className="text-sm text-accent text-center py-2">
                                ✓ Message sent! I&apos;ll get back to you soon.
                            </p>
                        )}
                        {status === "error" && (
                            <p role="alert" className="text-sm text-red-400 text-center py-2">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
