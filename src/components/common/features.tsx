const features = [
    { title: 'Livraison rapide', icon: '🚚' },
    { title: 'Personnalisable', icon: '🎨' },
    { title: 'Clé en main', icon: '🔑' },
  ];
  
  export default function Features() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Pourquoi choisir Modulsquare ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  