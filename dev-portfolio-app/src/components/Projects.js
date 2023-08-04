import React from "react";

const Projects = () => {
  return (
    <div id='projects' name='projects' className='w-full bg-slate-600'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-7xl text-white font-bold'>Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
          {/* Project 1 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Care Connect</h2>
            <div className="flex flex-col md:flex-row items-center">
            <img src="../../assets/images/CareConnect.PNG" alt="Project 1" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
              Care Connect is a full stack web application that enables users to manage employee information within an organization.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Project 2</h2>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <img src="dev-portfolio-app\src\assets\images\CareConnect.PNG" alt="Project 2" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
                Coming Soon
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Dinner Date</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img src="project3.jpg" alt="Project 3" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
              This web application can give recipe recommendations for each day of the week based on a user's preferences then lets users add them to their calendar.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white p-4">
            <h2 className="text-xl font-bold">Emplyee Tracker</h2>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <img src="../../" alt="Project 4" className="w-full md:w-1/2 p-2" />
              <p className="py-2 md:w-1/2">
              Employee Tracker is a CMS(content management system) application that adds,stores,and updates employee information in the database.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;