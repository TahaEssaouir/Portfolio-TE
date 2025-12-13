import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [p, exp, proj, edu, sk, lang, cert, int] = await Promise.all([
          axios.get(`${API_URL}/profile`),
          axios.get(`${API_URL}/experience`),
          axios.get(`${API_URL}/projects`),
          axios.get(`${API_URL}/education`),
          axios.get(`${API_URL}/skills`),
          axios.get(`${API_URL}/languages`),
          axios.get(`${API_URL}/certifications`),
          axios.get(`${API_URL}/interests`)
        ]);

        setProfile(p.data);
        setExperiences(exp.data);
        setProjects(proj.data);
        setEducation(edu.data);
        setSkills(sk.data);
        setLanguages(lang.data);
        setCertifications(cert.data);
        setInterests(int.data);
      } catch (err) {
        console.error('Erreur de chargement des données :', err);
      }
    }

    fetchData();
  }, []);

  return (
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
                languages={languages}
                certifications={certifications}
                interests={interests}
              />
            }
          />
          <Route path="/about" element={<AboutPage profile={profile} education={education} />} />
          <Route path="/projects" element={<ProjectsPage projects={projects} />} />
          <Route path="/skills" element={<SkillsPage skills={skills} languages={languages} certifications={certifications} interests={interests} />} />
          <Route path="/contact" element={<ContactPage profile={profile} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
