const ServicesSection = () => (
  <section id="Services" className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-900/80 rounded-lg p-4 shadow hover:scale-105 transition">
        <h3 className="font-semibold text-lg mb-2">Web Development</h3>
        <p className="text-gray-400">Modern, responsive websites using React, TailwindCSS, and more.</p>
      </div>
      <div className="bg-gray-900/80 rounded-lg p-4 shadow hover:scale-105 transition">
        <h3 className="font-semibold text-lg mb-2">Programming Tutoring</h3>
        <p className="text-gray-400">Personalized lessons in C, C++, Java, and DSA for all levels.</p>
      </div>
      <div className="bg-gray-900/80 rounded-lg p-4 shadow hover:scale-105 transition">
        <h3 className="font-semibold text-lg mb-2">Project Consulting</h3>
        <p className="text-gray-400">Guidance and support for your software projects and ideas.</p>
      </div>
    </div>
  </section>
);

export default ServicesSection;
