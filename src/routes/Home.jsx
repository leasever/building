import { Link, Outlet, NavLink } from 'react-router-dom'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import banner from '../data/home/banner.json'
import categoryServices from '../data/categoryServices.json'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import ButtonWhatsaap from '../components/ButtonWhatsapp'

export default function Home() {
  return (
    <>
      <Menu />

      <div className='home_container'>
        <Banner {...banner} />
        <ButtonWhatsaap />
        <div className='container'>
          <div
            className='body_home'
            id='biulding'
          >
            <Link to={'/about'}>
              <div className='client_banner'>
                <div className='client_banner_img'>
                  <img
                    src='/img/banner2.webp'
                    loading='lazy'
                    alt='Logo de la empresa'
                  />
                </div>
                <div className='client_description'>
                  <p>CLIENTE CORPORATIVO</p>
                  <p>Quiere construir plantas industriales, losas de concreto, estructura metálica o alquiler maquinaria.</p>
                </div>
              </div>
            </Link>
            <Link to={'/about'}>
              <div className='client_banner'>
                <div className='client_banner_img'>
                  <img
                    src='/img/banner3.webp'
                    loading='lazy'
                    alt='Logo de la empresa'
                  />
                </div>
                <div className='client_description'>
                  <p>CLIENTE RESIDENCIAL</p>
                  <p>Quiere construir viviendas multifamiliaries, condominios, restaurantes o su negocio.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='body_home_bout'>
            <h2>EXPERTOS EN PROYECTOS DE CONSTRUCCIÓN</h2>
            <p>Empresa constructora en Junín</p>
            <p>Somos una empresa constructora en Huancayo, especializada en la supervisión y ejecución de obras y proyectos de construcción, y la elaboración de expedientes técnicos. Empleamos mano de obra altamente calificada y disponemos de las herramientas y del material adecuado para ofrecer un resultado de calidad.</p>
            <div className='btn_pdf'>
              <a
                href='/img/servicios.pdf'
                download='servicios'
              >
                <span className='custom_btn'>DESCARGAR PDF DE SERVICIOS</span>
              </a>
            </div>
          </div>
          <div className='body_home_categories'>
            {categoryServices.map((item) => (
              <div
                className='category_card'
                key={item.id}
              >
                <div className='category_img_container'>
                  <img
                    src='/img/category1.jpg'
                    loading='lazy'
                    alt={item.title}
                  />
                </div>
                <div className='description'>
                  <p>{item.title}</p>
                  <p> {item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='body_home_projects'>
            <h2>PROYECTOS</h2>
            <div className='section_card_projects'>
              <ProjectCard />
            </div>

            <div className='btn_projects'>
              <Link to={'/project'}>
                <span className='custom_btn'>
                  <p>CONOCER MÁS PROYECTOS</p>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
