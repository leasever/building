import { Link, Outlet } from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from '../components/Footer'


export default function Home() {

  return (
    <>
      <Menu />
      <div className="banner_section">
        <div className="parallax"></div>
        <div className="overlay"></div>
        <div className="description_banner">
          <div className="title_description">
            <h1>Apostamos por el desarrollo de tu hogar</h1>
            <p>Somos una empresa constructora en Junín, fuertemente implicada en el crecimiento y el desarrollo social del Perú, mediante la supervisión y ejecución de proyectos de construcción reconocidos por su calidad y respeto por el medio ambiente.</p>
          </div>
          <div>
            <a href="#biulding">
              <span className="custom_btn">¿QUE NECESITA CONSTRUIR?</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="body_home" id="biulding">
          <Link to={'/about'}>
            <div className="client_banner">
              <div className="client_banner_img">
                <img src="/img/banner2.jpg" loading="lazy" alt="Logo de la empresa" />
              </div>
              <div className="client_description">
                <p>CLIENTE CORPORATIVO</p>
                <p>Quiere construir plantas industriales, losas de concreto, estructura metálica o alquiler maquinaria.</p>
              </div>
            </div>
          </Link>
          <Link to={'/about'}>
            <div className="client_banner">
              <div className="client_banner_img">
                <img src="/img/banner3.jpg" loading="lazy" alt="Logo de la empresa" />
              </div>
              <div className="client_description">
                <p>CLIENTE RESIDENCIAL</p>
                <p>Quiere construir viviendas multifamiliaries, condominios, restaurantes o su negocio.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="body_home_bout">
          <h2>EXPERTOS EN PROYECTOS DE CONSTRUCCIÓN</h2>
          <p>Empresa constructora en Junín</p>
          <p>Somos una empresa constructora en Huancayo, especializada en la supervisión y ejecución de obras y proyectos de construcción, y la elaboración de expedientes técnicos. Empleamos mano de obra altamente calificada y disponemos de las herramientas y del material adecuado para ofrecer un resultado de calidad.</p>
          <div className="btn_pdf">
            <a href="/img/servicios.pdf" download="servicios">
              <span className="custom_btn">DESCARGAR PDF DE SERVICIOS</span>
            </a>
          </div>
        </div>
        <div className="body_home_categories">
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
          <div className="category_card">
            <img src="/img/category1.jpg" loading="lazy" alt="category1" />
            <div className="description">
              <p>Ejecución de obras Ing. Civil</p>
              <p> Diseño, elaboración y ejecución de proyectos de construcción civil.</p>
            </div>
          </div>
        </div>
        <div className="body_home_projects">
          <h2>PROYECTOS</h2>
          <div className="section_card_projects">
            <Link to={'/about'}>
              <div className="card_project">
                <img src="/img/project1.jpg" loading="lazy" alt="project1" />
                <div className="project_description">
                  <p>Coop. Agraria NorAndino</p>
                  <p>Huancayo</p>
                </div>
              </div>
            </Link>
            <Link to={'/about'}>
              <div className="card_project">
                <img src="/img/project1.jpg" loading="lazy" alt="project1" />
                <div className="project_description">
                  <p>Coop. Agraria NorAndino</p>
                  <p>Huancayo</p>
                </div>
              </div>
            </Link>
            <Link to={'/about'}>
              <div className="card_project">
                <img src="/img/project1.jpg" loading="lazy" alt="project1" />
                <div className="project_description">
                  <p>Coop. Agraria NorAndino</p>
                  <p>Huancayo</p>
                </div>
              </div>
            </Link>
            <Link to={'/about'}>
              <div className="card_project">
                <img src="/img/project1.jpg" loading="lazy" alt="project1" />
                <div className="project_description">
                  <p>Coop. Agraria NorAndino</p>
                  <p>Huancayo</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="btn_projects">
            <Link to={'/about'}>
              <span className="custom_btn">
                <p>CONOCER MÁS PROYECTOS</p>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
