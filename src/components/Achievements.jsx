import { motion } from 'framer-motion';
import { Trophy, Star, Award, Users } from 'lucide-react';

export function Achievements() {
  const achievements = [
    { text: "Got 95% and 93% in class 10th and 12th respectively", icon: <Award className="w-5 h-5 text-yellow-400" /> },
    { text: "Got AIR 454 in NIMCET 2023", icon: <Trophy className="w-5 h-5 text-purple-400" /> },
    { text: "Solved 500+ DSA questions on Leetcode, GFG, Hackerrank", icon: <CodeIcon className="w-5 h-5 text-blue-400" /> },
    { text: "5 Star coder at Hackerrank", icon: <Star className="w-5 h-5 text-yellow-500" /> },
    { text: "Successfully made open source contribution in the Hacktober Fest 2023 and 2025", icon: <GithubIcon className="w-5 h-5 text-green-400" /> },
  ];

  const leadership = [
    { title: "NSS Event Head, Blood Donation Camp", desc: "Organized campus blood donation camp at campus, collaborating with healthcare partners to ensure safe participation." },
    { title: "Sankalp Center Coordinator", desc: "Developed teaching materials and mentored 30+ slum students, promoting peer learning." },
    { title: "E-Cell EM Head, Typing Speed Competition", desc: "Organized and hosted a campus-wide Typing Speed Competition under NIT JSR's E-Cell, engaging 100+ participants and promoting digital fluency." },
  ];

  return (
    <section id="achievements" className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Achievements List */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-purple-400" /> Achievements
            </h2>
            <ul className="space-y-6">
              {achievements.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 glass p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="mt-1">{item.icon}</div>
                  <p className="text-gray-300 text-lg">{item.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Leadership List */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-400" /> Leadership & Extracurricular
            </h2>
            <div className="space-y-6">
              {leadership.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// Simple icons for the list above
function CodeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  )
}
function GithubIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  )
}

export default Achievements;
