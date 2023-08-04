import React from "react";
import projectList from "./ProjectList"; // Make sure to provide the correct path

const Portfolio = () => {
  return (
    <div id='projects' name='projects' className='w-full bg-slate-600 py-24'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-7xl text-white font-bold'>Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
          {projectList.map((project, index) => (
            <div key={index} className="p-4 rounded-lg">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <div className="flex flex-col md:flex-row items-center">
                <a href={project.deployedLink}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                </a>
              </div>
              <p className="text-sm text-white">{project.technologies}</p>
              <div className="flex gap-2 mt-4">
                <a
                  href={project.deployedLink}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                >
                  View App
                </a>
                <a
                  href={project.githubLink}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;