import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export function About() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "National Institute of Technology, Jamshedpur",
      date: "Aug 2023 \u2013 Present",
      score: "CGPA: 8.1",
      location: "Jamshedpur, India"
    },
    {
      degree: "B.Sc (Hons) Computer Science",
      institution: "Delhi University",
      date: "Aug 2019 \u2013 Aug 2022",
      score: "CGPA: 8.9",
      location: "New Delhi, India"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-24">
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Education Journey
          </h2>
          
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                       <GraduationCap className="w-6 h-6 text-purple-400" />
                       {item.degree}
                    </h3>
                    <p className="text-xl text-gray-300 font-semibold mb-4">{item.institution}</p>
                    <p className="text-purple-400 font-medium">Score: {item.score}</p>
                  </div>
                  <div className="text-right text-gray-400 font-medium space-y-2">
                    <p className="flex items-center md:justify-end gap-2">
                      <Calendar className="w-4 h-4" /> {item.date}
                    </p>
                    <p className="flex items-center md:justify-end gap-2">
                      <MapPin className="w-4 h-4" /> {item.location}
                    </p>
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

export default About;
