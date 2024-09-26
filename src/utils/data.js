import infinite from '../assets/images/infinite_invites.png';
import keai from '../assets/images/keai.png';
import pokeball from '../assets/images/pokeball.png';
import authApp from '../assets/images/auth-app.jpeg';
import foodApp from '../assets/images/foodApp.jpeg';

export const listOfProjects = [
  {
    id: 1,
    image: infinite,
    link: 'https://development.infiniteinvites.com/',
    title: 'Infinite Invites',
    badge: ['React Js', 'Node Js', 'MySQL', 'Tailwind CSS'],
    description: 'Your personal website digital invitation',
    livePreview: true,
  },
  {
    id: 2,
    image: authApp,
    link: 'https://val-app.netlify.app/',
    title: 'Authentication App',
    badge: [
      'React Js',
      'Node Js',
      'MySQL',
      'React Context',
      'Axios',
      'TailwindCSS',
    ],
    livePreview: true,
    description:
      'User can register and sign in through email, facebook and google. Reset password, Email verification, store user cookies, see user database and user statistics',
  },
  {
    id: 3,
    image: keai,
    link: 'https://keai-commerce.netlify.app/',
    title: 'KEAI',
    badge: ['React Js', 'React Context', 'Axios', 'Styled Components'],
    description:
      'Home living e-commerce. User can login, add products to cart and filter products',
    livePreview: true,
  },
  {
    id: 4,
    image: pokeball,
    link: 'https://pokeball-app.netlify.app/',
    title: 'PokeBall',
    badge: ['React Js', 'React Context', 'Axios', 'Styled Components'],
    description: 'Catch your pokemon!',
    livePreview: true,
  },
  {
    id: 5,
    image: foodApp,
    link: 'https://foodieaddict.netlify.app/',
    title: 'FoodAddict',
    badge: ['Next Js'],
    description:
      'This application is a food app where user can share, find and join community for food/meals.',
    livePreview: true,
  },
];

export const listOfWorks = [
  {
    id: 1,
    duration: 'January 2023 - Present',
    job: 'Freelance Web Developer',
    jobdesks: [
      'I specialize in creating visually appealing, user-friendly websites tailored to meet the unique needs of my clients. With a strong foundation in HTML, CSS, JavaScript, and various web development frameworks, I bring ideas to life through clean, efficient code and responsive design.',
    ],
    stacks: [
      'Laravel',
      'PHP',
      'MySQL',
      'Bootstrap',
      'React Js',
      'Node Js',
      'MySQL',
      'React Context',
      'Axios',
      'TailwindCSS',
    ],
  },
  {
    id: 2,
    duration: 'April 2021 - December 2022',
    job: 'Laravel Developer',
    website: 'http://clickargo.com',
    company: 'Guud Company',
    jobdesks: [
      'Leading the development of the Go-To-Market strategies called ClicInsure by providing API for our clients across Indonesia, Singapore, and East Africa.',
      'Developing and maintaining the connection of microservice architecture to support some features such as Clicpay (Finance Module), Clicktruck, Shell Partnership and Yinson Partnership',
      'Utilizing ClickUp as monitoring and cross functional communication tool in the implementation of agile approach to create and improve operational process for user inquiries, assigning tasks and reporting bugs to head of division related.',
    ],
    stacks: [
      'Laravel',
      'Lumen',
      'Microservices',
      'Vue Js',
      'PHP',
      'MySQL',
      'Bootstrap',
    ],
  },
];

export const skills = [
  {
    title: 'react js',
    logo: 'teenyicons:react-outline',
  },
  { title: 'laravel', logo: 'file-icons:laravel' },
  { title: 'lumen', logo: 'simple-icons:lumen' },
  { title: 'tailwind CSS', logo: 'simple-icons:tailwindcss' },
  { title: 'redux', logo: 'akar-icons:redux-fill' },
  { title: 'node js', logo: 'fa-brands:node' },
  { title: 'git', logo: 'pajamas:git' },
  { title: 'next js', logo: 'ri:nextjs-line' },
];

export const language = [
  {
    title: 'javascript',
    logo: 'akar-icons:javascript-fill',
  },
  { title: 'PHP', logo: 'akar-icons:php-fill' },
];
