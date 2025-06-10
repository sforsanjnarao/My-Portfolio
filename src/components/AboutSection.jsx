import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer 
            </h3>

            <p className="text-muted-foreground">
              I'm a web developer with a strong passion for building clean, responsive, and user-friendly web applications.
              I enjoy working with modern technologies like React, TailwindCSS, and Node.js
              to create fast and accessible experiences.
            </p>

            <p className="text-muted-foreground">
            I'm always eager to learn and explore new tools and frameworks. 
            Whether it's designing intuitive interfaces or building full-stack features, 
            I focus on writing efficient code and continuously improving my skills through real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                My CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                  Building secure and responsive web applications using React, Node.js, and MongoDB. I focus on real-world functionality and clean code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Logic & Fixing Stuff</h4>
                  <p className="text-muted-foreground">
                  Breaking features into logic, solving bugs, and making systems actually work.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Handling</h4>
                  <p className="text-muted-foreground">
                  From planning features to tracking progress and deadlines — I keep things moving. I balance dev tasks, debug like a pro, and keep an eye on the bigger picture while shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
