import { useState } from 'react'
import Banner from '../components/Banner'
import banner from '../data/project/banner.json'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

export default function Project() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Menu />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
      <div className="project_section">
        <Banner {...banner} />
        <div className="template_project">
          <div className="container">
            <p>Constructora Hermanos cuenta con una reconocida experiencia en Huancayo y toda la región centro del Perú, que queda avalada por cualquiera de nuestros proyectos finalizados.</p>
          </div>
        </div>
        <div className="all_projects">
          <div className="container">
            <div onClick={() => setOpenModal(true)} className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
            <div className="card_project">
              <img src="img/project_page_1.jpg" loading="lazy" alt="project urban" />
              <div className="project_description">
                <p>Coop. Agraria NorAndino</p>
                <p>Huancayo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
