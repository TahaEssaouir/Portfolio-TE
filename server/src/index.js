const express = require('express');
const cors = require('cors');
require('dotenv').config();

const profileRoutes = require('./routes/profile');
const experienceRoutes = require('./routes/experience');
const projectsRoutes = require('./routes/projects');
const educationRoutes = require('./routes/education');
const skillsRoutes = require('./routes/skills');
const miscRoutes = require('./routes/misc');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Portfolio – Taha Essaouir');
});

app.use('/api/profile', profileRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api', miscRoutes); // /languages, /certifications, /interests

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
