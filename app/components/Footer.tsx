const YEAR = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)]">
            <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <a href="#home" className="text-lg font-bold tracking-tight">
                    <span className="text-[var(--text-primary)]">Md Farzan Akhtar</span>
                </a>

                {/* Copyright */}
                <p className="text-xs text-[var(--text-muted)] text-center">
                    © {YEAR} Md Farzan. Built with{" "}
                    <span className="text-accent">Next.js</span> &amp;{" "}
                    <span className="text-accent">Tailwind CSS</span>.
                </p>
            </div>
        </footer>
    );
}
