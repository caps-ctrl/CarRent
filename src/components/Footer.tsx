const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo i opis */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">AutoExpress</h2>
          <p className="text-sm">
            Nowoczesna wypożyczalnia samochodów. Komfort, bezpieczeństwo i
            elastyczność – zawsze na pierwszym miejscu.
          </p>
        </div>

        {/* Linki */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Nawigacja</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Strona główna
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Nasza flota
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Kontakt</h3>
          <p className="text-sm">📍 ul. Samochodowa 7, Warszawa</p>
          <p className="text-sm">📞 +48 123 456 789</p>
          <p className="text-sm">✉️ kontakt@autoexpress.pl</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AutoExpress. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer;
