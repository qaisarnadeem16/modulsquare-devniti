interface SectionProps {
  title: string;
  description: string;
  image?: string;
  reverse?: boolean;
}

export default function Section({
  title,
  description,
  image,
  reverse = false,
}: SectionProps) {
  return (
    <section className="py-12">
      <div
        className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center gap-8`}
      >
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
