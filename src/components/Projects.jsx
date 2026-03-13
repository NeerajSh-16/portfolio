import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Chatty",
    description: "Built a real-time chat application implementing the MERN stack with JWT authentication for secure access. Designed a responsive, modern UI with dark/light themes using TailwindCSS and DaisyUI. Live 1-to-1 messaging, presence indicators, and image sharing via Socket.IO.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
    links: {
      github: "https://github.com/NeerajSh-16",
    }
  },
  {
    title: "Quora Duplicate Questions Checker",
    description: "Developed an end-to-end NLP pipeline using Python, Scikit-learn, and Pandas to identify duplicate question pairs from the Quora dataset, processing over 30,000 records. Trained and evaluated multiple machine learning models to compare performance and improve classification accuracy.",
    tags: ["Python", "Scikit-learn", "Pandas", "NLP", "Machine Learning"],
    links: {
      github: "https://github.com/NeerajSh-16",
    }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-24 bg-black/50">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
               Featured Projects
             </h2>
             <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative glass rounded-3xl overflow-hidden p-1 p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 hover:to-blue-500/50 transition-all duration-500"
              >
                <div className="bg-[#0a0a0a] rounded-[23px] h-full p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle background glow effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-500" />
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-purple-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                       <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-white">
                         <Github className="w-5 h-5" />
                       </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
