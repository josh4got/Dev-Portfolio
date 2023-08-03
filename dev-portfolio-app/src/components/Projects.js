import React from "react";

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-slate-600'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-7xl text-white font-bold'>Projects</h1>
        <p className ='py-5'>Check out some of my recent work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Project 1 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Project 1</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img src="project1.jpg" alt="Project 1" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
                Description of Project 1. This will have an image on the left.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Project 2</h2>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <img src="project2.jpg" alt="Project 2" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
                Description of Project 2. This will have an image on the right.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Project 3</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img src="project3.jpg" alt="Project 3" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
                Description of Project 3. This will have an image on the left.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Project 4</h2>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <img src="project4.jpg" alt="Project 4" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
                Description of Project 4. This will have an image on the right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;