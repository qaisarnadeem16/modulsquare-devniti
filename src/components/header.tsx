export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <img src="https://modulsquare.mu/wp-content/uploads/2025/05/LOGO_Modulsquare_MU-1.png" alt="Modulsquare" className="h-10" />
        <nav className="space-x-6 hidden md:block">
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Accueil
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Nos Modules
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 font-medium"
          >
            Contact
          </a>
        </nav>
        <a
          href="#"
          className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-600 hidden md:inline-block"
        >
          Demande de devis
        </a>
      </div>
    </header>
  );
}
