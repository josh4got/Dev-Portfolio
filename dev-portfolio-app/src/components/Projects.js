import React from "react";
import CareConnect from "../assets/CareConnect.PNG";
import DinnerDate from "../assets/Dinner Date.PNG";
import ComingSoon from "../assets/coming-soon.jpg";
import EmployeeTracker from "../assets/Employee Tracker.PNG";

const Projects = () => {
  return (
    <div id='projects' name='projects' className='w-full bg-slate-600'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-7xl text-white font-bold'>Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
          {/* Project 1 */}
          <div className="p-4 rounded-lg">
            <h2 className="text-xl font-bold">Care Connect</h2>
            <div className="flex flex-col md:flex-row items-center">
              <a href="https://vast-beach-72570.herokuapp.com/">
                <img src={CareConnect} alt="Care Connect" className="w-full md:w-1/2 p-2" />
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-4 rounded-lg">
            <h2 className="text-xl font-bold">Task Hive</h2>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <a href="placeholder">
                <img src={ComingSoon} alt="Coming Soon" className="w-full md:w-1/2 p-2" />
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="p-4 rounded-lg">
            <h2 className="text-xl font-bold">Dinner Date</h2>
            <div className="flex flex-col md:flex-row items-center">
              <a href="https://josh4got.github.io/Dinner-Date/">
                <img src={DinnerDate} alt="Dinner Date" className="w-full md:w-1/2 p-2" />
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="p-4 rounded-lg">
            <h2 className="text-xl font-bold">Employee Tracker</h2>
            <div className="flex flex-col-reverse md:flex-row items-center">
              <a href="https://drive.google.com/file/d/1rkPG0zECUZWdH_6yvI5l1SMCmZkCpQh-/view">
                <img src={EmployeeTracker} alt="Employee Tracker" className="w-full md:w-1/2 p-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;