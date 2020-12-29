import React from 'react';
import Home from './pages/Home';
import Styles from './components/Styles';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import GetInvolved from './pages/GetInvolved'
import Team from './pages/Team';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    <div className="App">
      {/* Global */}
      <Styles />
      <Navbar />
      {/* pages with router */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/get-involved" exact>
            < GetInvolved/>
          </Route>
          

          <Route path='/projects/:id'>
            <ProjectDetail />
          </Route>

          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
