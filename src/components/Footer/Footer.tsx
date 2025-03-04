export const Footer: React.FC = () => {
  return (
    // <p className="flex leading-[var(--footer-height)] items-center flex-col gap-1">
    //   footer
    // </p>
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6">
        {/* Sekcja linków */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-white">My_Shop</h2>
          </div>
          <nav className="flex flex-wrap gap-4">
            <a href="/about" className="hover:text-white transition">
              O nas
            </a>
            <a href="/contact" className="hover:text-white transition">
              Kontakt
            </a>
            <a href="/terms" className="hover:text-white transition">
              Regulamin
            </a>
            <a href="/privacy" className="hover:text-white transition">
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
            <i className="fab fa-facebook-f text-2xl hover:text-white transition"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl hover:text-white transition"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-2xl hover:text-white transition"></i>
          </a>
        </div>

        {/* Sekcja dolna */}
        <div className="text-center text-sm border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} My_Shop. Wszelkie prawa
            zastrzeżone.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Płatności obsługiwane przez{" "}
            <span className="text-white">Przelewy24</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
