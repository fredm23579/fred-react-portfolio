/**
 * @file App.js
 * @description Root application component.
 *
 * Sets up client-side routing via React Router 6. The `future` flags
 * opt in to v7 behaviour early and suppress upgrade console warnings.
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

/**
 * React Router v7 future flags — opts in early to v7 routing behaviour
 * and eliminates the "future flag" console warnings in React Router 6.30+.
 */
const routerFuture = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

function App() {
  return (
    <Router future={routerFuture}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/about"     element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume"    element={<Resume />} />
            <Route path="/contact"   element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
