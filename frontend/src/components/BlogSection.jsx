const BlogSection = () => (
  <section id="Blog" className="bg-gray-800/60 rounded-xl p-6 shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-gray-900/80 rounded-lg p-4 shadow flex flex-col justify-between"
        >
          <h3 className="font-semibold text-lg mb-2">
            Learn Java - in a fun way
          </h3>
          <p className="text-gray-400 flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            fuga doloribus cumque pariatur doloremque, quasi reprehenderit sunt
            possimus?
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded mt-4">
            Read more
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default BlogSection;
