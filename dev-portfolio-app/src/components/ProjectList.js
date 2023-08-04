import CareConnect from '../assets/images/CareConnect.png';
import DinnerDate from '../assets/images/Dinner Date.png';
import ComingSoon from '../assets/images/coming-soon.jpg';
import EmployeeTracker from '../assets/images/Employee Tracker.png';
import SocialNetworkAPI from '../assets/images/SocialNetworkAPI.png';
import JavascriptQuiz from '../assets/images/Deployesd-JS-Quiz.png';



const projectList = [
    {
        title: 'Care Connect',
        deployedLink: 'https://vast-beach-72570.herokuapp.com/',
        githubLink: 'https://github.com/pdangerfield/CareConnect',
        image: CareConnect,
        technologies: 'Authentication, Node.js, Express, Handlebars, MySQL, Sequelize, Heroku, Chart.js',
    },
    {
        title: 'Dinner Date',
        deployedLink: 'https://josh4got.github.io/Dinner-Date/',
        githubLink: 'https://github.com/josh4got/Dinner-Date',
        image: DinnerDate,
        technologies: 'Api, Javascript, Tailwindcss',
    }, 
    {
        title: 'Task Hive',
        deployedLink: '',
        githubLink: 'https://github.com/shruthisalimath/TaskHive',
        image: ComingSoon,
        technologies: 'React, MongoDB, Express, Node.js, GraphQL, Apollo,',
    },
    {
        title: 'Employee Tracker',
        deployedLink: 'https://drive.google.com/file/d/1rkPG0zECUZWdH_6yvI5l1SMCmZkCpQh-/view',
        githubLink: 'https://github.com/josh4got/Employee-Tracker-CMS',
        image: EmployeeTracker,
        technologies: 'Javascript, Node.js, Inquirer, MySQL',
    },
    {
        title: 'Social Network API',
        deployedLink: 'https://drive.google.com/file/d/17ezCFUDeeuc9I66kUplzlpQpEIvIpoIV/view',
        githubLink: 'https://github.com/josh4got/Social-Network-API',
        image: SocialNetworkAPI,
        technologies: 'MongoDb, Mongoose, Express, Node.js',
    },
    {
        title: 'JavaScript Quiz',
        deployedLink: 'https://josh4got.github.io/Javascript-Quiz/',
        githubLink: 'https://github.com/josh4got/Javascript-Quiz',
        image: JavascriptQuiz,
        technologies: 'Javascript, HTML, CSS',
    },
];

export default projectList;