export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24">
      <div className="max-w-3xl z-10 pointer-events-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Neeraj Sharma
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
          Crafting intuitive, responsive, and dynamic web experiences. From modern user interfaces to robust backend architectures.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://linkedin.com/in/challenger-neeraj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 glass hover:bg-white/10 text-white rounded-lg font-medium transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
