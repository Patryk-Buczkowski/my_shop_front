export const Footer: React.FC = () => {
  return (
    // <p className="flex leading-[var(--footer-height)] items-center flex-col gap-1">
    //   footer
    // </p>
    <footer className="bg-gray-900 py-6 text-gray-300">
      <div className="container mx-auto px-6">
        {/* Sekcja linków */}
        <div className="flex flex-wrap items-center justify-between border-b border-gray-700 pb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-white">My_Shop</h2>
          </div>
          <nav className="flex flex-wrap gap-4">
            <a href="/about" className="transition hover:text-white">
              O nas
            </a>
            <a href="/contact" className="transition hover:text-white">
              Kontakt
            </a>
            <a href="/terms" className="transition hover:text-white">
              Regulamin
            </a>
            <a href="/privacy" className="transition hover:text-white">
              Polityka prywatności
            </a>
          </nav>
        </div>

        {/* Sekcja social media */}
        <div className="flex justify-center gap-6 py-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-2xl transition hover:text-white"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl transition hover:text-white"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-2xl transition hover:text-white"></i>
          </a>
        </div>

        {/* Sekcja dolna */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} My_Shop. Wszelkie prawa
            zastrzeżone.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Płatności obsługiwane przez{" "}
            <span className="text-white">Przelewy24</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
