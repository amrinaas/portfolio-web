import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            exact={route.exact}
            path={route.path}
            element={route.component}
            key={index}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
