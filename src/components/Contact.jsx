import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Get In Touch</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="mailto:shneeraj.2619@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="w-5 h-5" /> shneeraj.2619@gmail.com
          </a>
          <a href="https://linkedin.com/in/challenger-neeraj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a href="https://github.com/NeerajSh-16" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <span className="flex items-center gap-2 text-gray-400">
            <Phone className="w-5 h-5 text-gray-500" /> +91 6398336205
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Neeraj Sharma. Built with React and Three.js.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
