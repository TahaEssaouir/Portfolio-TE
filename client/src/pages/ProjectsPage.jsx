import Projects from '../components/Projects';

export default function ProjectsPage({ projects }) {
  return (
    <section>
      <Projects projects={projects} />
    </section>
  );
}
