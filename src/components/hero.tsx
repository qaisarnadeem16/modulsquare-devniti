export default function Hero() {
    return (
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Le modulaire à votre service</h1>
            <p className="text-lg md:text-xl mb-6">Découvrez nos solutions rapides, économiques et durables</p>
            <a href="#" className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600">
              Demander un devis
            </a>
          </div>
        </div>
      </section>
    );
  }
  