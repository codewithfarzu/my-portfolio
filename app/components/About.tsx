const SKILLS = [
    { name: "HTML", level: 80 },
    { name: "Css", level: 80 },
    { name: "JavaScript", level: 35 },
    { name: "React / Next.js", level: 30 },
    { name: "Tailwind CSS", level: 85 },
    { name: "TypeScript", level: 20 },
    { name: "Node.js", level: 10 },
    { name: "MongoDB / SQL", level: 10 },
];

/* const STATS = [
    { value: "2", label: "Years Experience" },
    { value: "20+", label: "Projects Done" },
    { value: "15+", label: "Happy Clients" },
    { value: "5+", label: "Technologies" },
]; */

export default function About() {
    return (
        <section id="about" className="section bg-[var(--bg-primary)]">
            <div className="container-custom">
                {/* Heading */}
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>
                <div className="section-underline" />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left — bio */}
                    <div>
                        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                            Hi! I&apos;m <span className="text-accent font-semibold">Md Farzan Akhtar</span>, a
                            passionate Full Stack Developer based in Asansol, WestBengal, India. I love building
                            fast, accessible, and visually polished web applications.
                        </p>
                        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                            I design and develop seamless web applications using HTML, CSS, React.js, and Next.js for the frontend, combined with Node.js, Express.js, and MongoDB for robust backend functionality.
                            I’m passionate about writing clean code and continuously improving my craft.
                        </p>

                        {/* Info grid */}
                        <ul className="grid grid-cols-2 gap-3 mb-8 list-none">
                            {[
                                ["Name", "Md Farzan Akhtar"],
                                ["Email", "mdfarzan78@gmail.com"],
                                ["Location", "West Bangal, India"],
                                ["Degree", "Frontend Development / Diploma CST"],
                                ["Freelance", "Available"],
                                ["Languages", "Hindi, English"],
                            ].map(([key, val]) => (
                                <li key={key} className="text-sm">
                                    <span className="text-[var(--text-muted)] font-mono">{key}: </span>
                                    <span className="text-[var(--text-primary)] font-medium">{val}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="/my-resume/md-farzan-akhtar.pdf" download className="btn-primary">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Download CV
                        </a>
                    </div>

                    {/* Right — skills */}
                    <div>
                        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
                            Technical Skills
                        </h3>
                        <ul className="flex flex-col gap-5 list-none">
                            {SKILLS.map(({ name, level }) => (
                                <li key={name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-[var(--text-secondary)]">{name}</span>
                                        <span className="text-sm text-accent font-mono">{level}%</span>
                                    </div>
                                    <div className="skill-bar-track">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${level}%` }}
                                            role="progressbar"
                                            aria-valuenow={level}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            aria-label={name}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats */}
                {/* <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 list-none">
                    {STATS.map(({ value, label }) => (
                        <li
                            key={label}
                            className="card p-6 text-center"
                        >
                            <p className="text-3xl font-bold text-accent mb-1">{value}</p>
                            <p className="text-sm text-[var(--text-secondary)]">{label}</p>
                        </li>
                    ))}
                </ul> */}
            </div>
        </section>
    );
}
