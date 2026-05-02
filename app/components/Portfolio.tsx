"use client";

import { useState } from "react";
import Image from "next/image";

type Project = {
    title: string;
    description: string;
    tags: string[];
    category: string;
    liveUrl: string;
    repoUrl: string;
    color: string;
    image: string;
};

const PROJECTS: Project[] = [
    {
        title: "Divyanshi Enterprise",
        description: "A B2B product showcase website for Divyanshi Enterprises — a Delhi-based dealer of communication and security equipment including walkie-talkies, GPS devices, and body-worn cameras, built with a product catalog and contact system.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        category: "Frontend",
        liveUrl: "https://www.divyanshigroup.co.in/",
        repoUrl: "#",
        color: "#5b5ef4",
        image: "/project-thumbnail/divyanshi.webp",
    },
    {
        title: "Lustre Illumination",
        description: "A premium lighting brand website for Lustre Illuminations — a 30+ year ISO-certified manufacturer of LED indoor, landscape, street, and heritage lighting solutions, featuring a product showcase and inquiry system.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        category: "Frontend",
        liveUrl: "https://www.lustre.in/",
        repoUrl: "#",
        color: "#00aaff",
        image: "/project-thumbnail/lustre.webp",
    },
    {
        title: "Shreemat Orchid LED Light",
        description: "A product catalog website for Shreemat Orchid — an Indian LED lighting manufacturer offering indoor panels, COB lights, and solar outdoor solutions, built with a detailed product showcase and inquiry flow.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        category: "Frontend",
        liveUrl: "https://shreemat-orchid.netlify.app/",
        repoUrl: "#",
        color: "#ff6b6b",
        image: "/project-thumbnail/shreemat.webp",
    },
    {
        title: "CRUD Ops with REST API",
        description: "A React CRUD app that fetches, displays, and edits user data from a REST API, featuring dynamic form inputs and real-time data rendering.",
        tags: ["React.js", "TypeScript", "Next.js", "CSS", "REST API"],
        category: "Backend",
        liveUrl: "https://data-api30-07-25.netlify.app/edit/2",
        repoUrl: "#",
        color: "#ffd93d",
        image: "/project-thumbnail/curd-api.webp",
    },
    {
        title: "Weather App",
        description: "A real-time weather app with city-based search, current temperature and conditions display, hourly upcoming forecast, and a 5-day weather outlook powered by a weather API.",
        tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
        category: "Frontend",
        liveUrl: "https://current-weather-app11.netlify.app/",
        repoUrl: "#",
        color: "#c77dff",
        image: "/project-thumbnail/weather.webp",
    },
    {
        title: "Calculator",
        description: "A clean, responsive calculator app supporting basic arithmetic operations with a minimal UI and keyboard-friendly input.",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "Frontend",
        liveUrl: "https://calculator2-5-2026.netlify.app/",
        repoUrl: "#",
        color: "#ff9f43",
        image: "/project-thumbnail/calculator.webp",
    },
    {
        title: "PSD to HTML with Bootstrap",
        description: "A PSD to HTML conversion — a responsive hospital website with sections for services, doctor profiles, gallery, blog, and a patient enquiry form, featuring smooth GSAP scroll animations and a fully responsive layout.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "GSAP"],
        category: "Frontend",
        liveUrl: "https://carepoint-hospital.netlify.app/",
        repoUrl: "#",
        color: "#00d4aa",
        image: "/project-thumbnail/hospital.webp",
    },
    {
        title: "PSD to HTML & CSS",
        description: "A PSD to HTML conversion — a restaurant landing page with a food menu, special recipes section, pricing display, working hours, and a mobile app promotion — built as a fully responsive multi-section dining website.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        category: "Frontend",
        liveUrl: "https://new-foody.netlify.app/",
        repoUrl: "#",
        color: "#00d4aa",
        image: "/project-thumbnail/restaurent.webp",
    },
    {
        title: "PSD to HTML",
        description: "A PSD to HTML conversion — a responsive restaurant landing page with a newsletter subscription section, built with a clean layout and modern UI design.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        category: "Frontend",
        liveUrl: "https://resturent-app30.netlify.app/",
        repoUrl: "#",
        color: "#00d4aa",
        image: "/project-thumbnail/foody.webp",
    },
];

const FILTERS = ["All", "Frontend", "Backend", "FullStack"] as const;
type Filter = (typeof FILTERS)[number];

export default function Portfolio() {
    const [active, setActive] = useState<Filter>("All");

    const filtered =
        active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

    return (
        <section id="portfolio" className="section bg-[var(--bg-secondary)]">
            <div className="container-custom">
                <h2 className="section-title">
                    My <span>Work</span>
                </h2>
                <div className="section-underline" />

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Project filters">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            role="tab"
                            aria-selected={active === f}
                            onClick={() => setActive(f)}
                            className={[
                                "px-4 py-1.5 rounded-full text-sm font-medium capitalize border transition-all duration-200",
                                active === f
                                    ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                                    : "bg-transparent text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--border-accent)] hover:text-[var(--accent)]",
                            ].join(" ")}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Cards grid */}
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
                    {filtered.map((project) => (
                        <li key={project.title} className="portfolio-card card group flex flex-col overflow-hidden">

                            {/* Project screenshot image */}
                            <div className="relative w-full h-44 overflow-hidden bg-[var(--bg-card-hover)]">
                                <Image src={project.image} alt={`${project.title} screenshot`} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                                {/* Color accent overlay on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                    style={{ background: project.color }}
                                    aria-hidden="true"
                                />
                                {/* Live link overlay button */}
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                    aria-label={`${project.title} live demo`} className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                        </svg>
                                        Live Preview
                                    </span>
                                </a>
                            </div>

                            {/* Color bar */}
                            <div className="h-[3px]" style={{ background: project.color }} aria-hidden="true" />

                            {/* Card body */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 shrink-0 ml-2">
                                        <a
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} GitHub repo`}
                                            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                                        >
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} live demo`}
                                            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                                        >
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-2 list-none">
                                    {project.tags.map((tag) => (
                                        <li key={tag}>
                                            <span className="tag">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* View more */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/codewithfarzu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
