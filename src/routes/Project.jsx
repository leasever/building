import Banner from '../components/Banner'
import banner from '../data/project/banner.json'
import Menu from '../components/Menu'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

export default function Project() {
  return (
    <>
      <Menu />
      <div className="project_section">
        <Banner {...banner} />
        <div className="template_project">
          <div className="container">
            <p>Constructora Hermanos cuenta con una reconocida experiencia en Huancayo y toda la región centro del Perú, que queda avalada por cualquiera de nuestros proyectos finalizados.</p>
          </div>
        </div>
        <div className="all_projects">
          <div className="container">
            <ProjectCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
