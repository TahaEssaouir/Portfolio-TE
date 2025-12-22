import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LanguageProvider } from './contexts/LanguageContext';

import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import About from './components/About';
import ProjectDetails from './pages/ProjectDetails';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [p, exp, proj, edu, sk] = await Promise.all([
          axios.get(`${API_URL}/profile`),
          axios.get(`${API_URL}/experience`),
          axios.get(`${API_URL}/projects`),
          axios.get(`${API_URL}/education`),
          axios.get(`${API_URL}/skills`),
      
        ]);

        setProfile(p.data);
        setExperiences(exp.data);
        setProjects(proj.data);
        setEducation(edu.data);
        setSkills(sk.data);

      } catch (err) {
        console.error('Erreur de chargement des données :', err);
      }
    }

    fetchData();
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <CustomCursor />
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  profile={profile}
                  experiences={experiences}
                  projects={projects}
                  education={education}
                  skills={skills}
                />
              }
            />
            <Route path="/about" element={<About profile={profile} />} />
            <Route path="/projects" element={<ProjectsPage projects={projects} />} />
            <Route path="/skills" element={<SkillsPage skills={skills} />} />
            <Route path="/contact" element={<ContactPage profile={profile} />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
