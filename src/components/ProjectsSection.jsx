import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Reading Room",
    description:
      "A library user-interface system that allows users to browse, checkout, and bookmark over 6,000 titles",
    image: "/projects/project1.jpg",
    tags: ["Java", "Java Spring Boot", "SQL", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Pinned",
    description:
      "A points-of-interest website that allows users to add, edit, and find points of interests around Athens, Georgia",
    image: "/projects/project2.jpg",
    tags: ["React", "HTML/CSS", "JavaScript", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "ReelMovies",
    description:
      "A movie search engine web application based on TMDB API that allows users to search up, bookmark, and create folders for movies and TV shows",
    image: "/projects/project3.jpg",
    tags: ["React", "HTML/CSS", "JavaScript", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-50 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/DennyYe32"
          >
            Check Out My GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
