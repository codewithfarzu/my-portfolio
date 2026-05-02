type Service = {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
};

const SERVICES: Service[] = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        title: "Frontend Development",
        description:
            "Pixel-perfect, responsive UIs built with Html, Css, javaScript, React, Next.js, and Tailwind CSS. Fast, accessible, and SEO-friendly.",
        features: ["Html / Css", "JavaScript", "React / Next.js", "Tailwind CSS", "Animations", "Responsive Design"],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                <path d="M9 21v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
            </svg>
        ),
        title: "Backend Development",
        description:
            "Scalable REST APIs and server-side logic with Node.js, Express, and databases like MongoDB and PostgreSQL.",
        features: ["Node.js / Express", "REST APIs", "MongoDB / SQL", "Authentication"],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Full Stack Apps",
        description:
            "End-to-end web applications from database design to deployment — complete product delivery.",
        features: ["Full Stack Next.js", "Database Design", "CI/CD", "Cloud Deploy"],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
        ),
        title: "UI/UX Design",
        description:
            "Clean, intuitive interfaces designed with user experience at the core. Wireframes to high-fidelity prototypes.",
        features: ["Figma Prototypes", "Design Systems", "Accessibility", "User Research"],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        ),
        title: "Performance Optimization",
        description:
            "Audit and optimize existing apps for speed, Core Web Vitals, and lighthouse scores.",
        features: ["Core Web Vitals", "Code Splitting", "Image Optimization", "Caching"],
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
        ),
        title: "Open Source & Consulting",
        description:
            "Code reviews, architecture consulting, and open-source contributions to help teams ship better software.",
        features: ["Code Review", "Architecture", "Tech Consulting", "Mentoring"],
    },
];

export default function Services() {
    return (
        <section id="services" className="section bg-[var(--bg-primary)]">
            <div className="container-custom">
                {/* Heading */}
                <h2 className="section-title">
                    My <span>Services</span>
                </h2>
                <div className="section-underline" />

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
                    {SERVICES.map(({ icon, title, description, features }) => (
                        <li key={title} className="card p-6 group flex flex-col gap-4">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-[var(--accent-glow)] border border-[var(--border-accent)] flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                                {icon}
                            </div>

                            <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-accent transition-colors duration-200">
                                {title}
                            </h3>

                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                                {description}
                            </p>

                            <ul className="flex flex-col gap-1.5 list-none">
                                {features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
