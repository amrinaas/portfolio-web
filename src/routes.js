import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export const publicRoutes = [
  {
    component: <Home />,
    path: '/',
    exact: true,
  },
  {
    component: <Projects />,
    path: '/projects',
    exact: true,
  },
  {
    component: <Skills />,
    path: '/skills',
    exact: true,
  },
  {
    component: <Contact />,
    path: '/contact',
    exact: true,
  },
];
