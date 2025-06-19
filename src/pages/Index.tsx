
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, User, GraduationCap, Award, Code, Heart, Plane, Zap, Moon, Sun } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'C/C++', level: 95 },
    { name: 'Java', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Redux Toolkit', level: 75 },
    { name: 'Socket.IO', level: 80 },
    { name: 'SQL', level: 80 },
    { name: 'Git/GitHub', level: 90 }
  ];

  const projects = [
    {
      title: "FullStack Chat App",
      duration: "03/2025 - 04/2025",
      url: "https://chatty-8shj.onrender.com/login",
      description: "Real-time chat application with secure authentication and modern UI",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT", "TailwindCSS", "DaisyUI"],
      features: [
        "Developed a real-time chat application using React, Node.js, and MongoDB (MERN Stack)",
        "Integrated JWT-based authentication with secure login and protected routes",
        "Built responsive and modern UI with TailwindCSS and DaisyUI, including dark/light theme switching",
        "Designed and developed online/offline presence indicators and image sharing feature in chats",
        "Implemented live messaging functionality using Socket.IO with 1-on-1 chat support"
      ]
    },
    {
      title: "Connect Four Dots Game",
      duration: "Interactive Gaming Experience",
      url: "https://neerajsh-16.github.io/connect-four-game/",
      description: "Dynamic web application with interactive gaming experience",
      technologies: ["Sass", "JavaScript", "React", "Redux-Toolkit"],
      features: [
        "Developed a dynamic web application using Sass, JavaScript, React, and Redux-Toolkit",
        "Providing users with an interactive gaming experience",
        "Implemented both single-player and multiplayer modes",
        "Including an AI opponent, expanding the game's accessibility and engagement"
      ]
    },
    {
      title: "ASCII-ART Library",
      duration: "Data Structures & OOP",
      url: "https://github.com/NeerajSh-16/ascii-art",
      description: "Demonstrating real-world use of data structures and Object-oriented programming",
      technologies: ["C++", "Data Structures", "OOP", "Algorithms"],
      features: [
        "Demonstrated the real-world use of data structures and Object-oriented programming approaches",
        "Designed comprehensive library showcasing various programming concepts",
        "Implemented efficient algorithms for ASCII art generation",
        "Applied system design principles for scalable architecture"
      ]
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Got 95% and 93% in class 10th and 12th respectively. Achieved AIR 454 in NIMCET 2023.",
      icon: Award,
      category: "Academic"
    },
    {
      title: "Coding Achievements",
      description: "Solved 500+ DSA questions on 3 different coding platforms (Leetcode, GFG, Hackerrank). Successfully participated in the Hacktober Fest 2024.",
      icon: Code,
      category: "Programming"
    },
    {
      title: "Blood Donation Camp",
      description: "Organized a blood donation camp at NIT Jamshedpur, benefiting multiple healthcare facilities and collaborating with professionals to ensure safety and community participation",
      icon: Heart,
      category: "Community Service"
    },
    {
      title: "Slum Schooling",
      description: "Volunteered with an NGO at NIT to teach and mentor underprivileged slum students, helping them improve their literacy and numeracy skills",
      icon: GraduationCap,
      category: "Social Impact"
    }
  ];

  const interests = [
    { name: "Travelling", icon: Plane },
    { name: "Badminton", icon: Zap },
    { name: "Sketching", icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NEERAJ SHARMA
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={toggleTheme}
                  aria-label="Toggle dark mode"
                />
                <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              NEERAJ SHARMA
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
             Full Stack Developer | Programmer | Artist
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone size={18} />
                <span>+916398336205</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail size={18} />
                <span>shneeraj.2619@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin size={18} />
                <span>Jamshedpur, India</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <Button 
                onClick={() => scrollToSection('projects')} 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://www.linkedin.com/in/challenger-neeraj', '_blank')}
                className="flex items-center gap-2"
              >
                <Linkedin size={16} />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com/NeerajSh-16', '_blank')}
                className="flex items-center gap-2"
              >
                <Github size={16} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg dark:bg-slate-700">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am currently pursuing Master of Computer Applications (MCA) at the prestigious National Institute of Technology (NIT) Jamshedpur, 
                  with an impressive CGPA of 8.10/10.0. I completed my Bachelor of Science in Computer Science from Delhi University with a CGPA of 8.90/10.0. 
                  As a passionate full-stack developer and competitive programmer, I have solved over 500+ DSA problems across multiple platforms including 
                  LeetCode, GeeksforGeeks, and HackerRank. I excel in building modern web applications using the MERN stack and have hands-on experience 
                  with real-time applications, authentication systems, and responsive UI design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Education</h2>
          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl dark:text-gray-100">Master of Computer Applications (MCA)</CardTitle>
                    <CardDescription className="text-lg dark:text-gray-300">National Institute of Technology (NIT), Jamshedpur</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                  <span>📅 Aug 2023 - Aug 2026</span>
                  <span>•</span>
                  <span>📍 Jharkhand, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 border-0 dark:bg-green-900/30 dark:text-green-400">CGPA: 8.10/10.0</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl dark:text-gray-100">Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription className="text-lg dark:text-gray-300">Delhi University</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                  <span>📅 Aug 2019 - Aug 2022</span>
                  <span>•</span>
                  <span>📍 Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 border-0 dark:bg-green-900/30 dark:text-green-400">CGPA: 8.90/10.0</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Programming Languages & Frameworks</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Technical Expertise</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Frontend Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 border-0 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Backend & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Socket.io', 'WebRTC', 'Redis', 'Kafka', 'Docker'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 border-0 dark:from-green-900/30 dark:to-blue-900/30 dark:text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'Visual Studio Code', 'DBMS', 'OOPS', 'Data Structures', 'Algorithms', 'System Design', 'OS'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 border-0 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-gray-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Featured Projects</h2>
          <div className="relative">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow dark:bg-slate-700">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-2xl mb-2 dark:text-gray-100">{project.title}</CardTitle>
                            <CardDescription className="text-lg mb-4 dark:text-gray-300">{project.description}</CardDescription>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                              <span>📅 {project.duration}</span>
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => window.open(project.url, '_blank')}
                            className="flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} className="bg-blue-100 text-blue-800 border-0 dark:bg-blue-900/30 dark:text-blue-400">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">Key Features:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-700">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                      <achievement.icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl dark:text-gray-100">{achievement.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2 dark:bg-slate-600 dark:text-gray-300">
                        {achievement.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Interests</h2>
          <div className="flex justify-center gap-8">
            {interests.map((interest, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="p-4 bg-white dark:bg-slate-700 rounded-full shadow-md mb-3">
                  <interest.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-12 opacity-90">
            I'm always interested in new opportunities and collaborations
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('mailto:shneeraj.2619@gmail.com')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://www.linkedin.com/in/challenger-neeraj', '_blank')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('https://github.com/NeerajSh-16', '_blank')}
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </Button>
          </div>
          <div className="flex justify-center items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+916398336205</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>Jamshedpur, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 dark:bg-slate-900 text-gray-400 text-center transition-colors duration-300">
        <p>&copy; 2024 Neeraj Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
