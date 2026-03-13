import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8 mb-4 text-purple-400" />,
    skills: ["C++ (Proficient)", "Java", "Python"],
  },
  {
    title: "Frontend Stack",
    icon: <Globe className="w-8 h-8 mb-4 text-blue-400" />,
    skills: ["HTML & CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Stack",
    icon: <Server className="w-8 h-8 mb-4 text-green-400" />,
    skills: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-8 h-8 mb-4 text-pink-400" />,
    skills: ["Git & GitHub", "VS Code", "Vercel & Render", "NumPy & Pandas", "Streamlit"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors"
              >
                {category.icon}
                <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-gray-300 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-purple-500" />
                       {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
