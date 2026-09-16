export function Footer() {
  return (
    <footer className="relative z-10 py-10 border-t border-border-soft">
      <div className="mx-auto max-w-6xl px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-faint font-mono">
        <p>© {new Date().getFullYear()} Al Amin. Built with Next.js, TypeScript & Tailwind.</p>
        <p>Kalabagan, Dhaka, Bangladesh</p>
      </div>
    </footer>
  );
}
