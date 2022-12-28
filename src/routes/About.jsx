import Banner from '../components/Banner'
import banner from '../data/about/banner.json'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ButtonWhatsapp from '../components/ButtonWhatsapp'
import ButtonUp from '../components/ButtonUp'

export default function About() {
  window.scrollTo(0, 0)
  return (
    <>
      <Menu />
      <div className='about_container'>
        <Banner {...banner} />
        <ButtonWhatsapp />
        <div className='container'>
          <div className='about_us'>
            <div className='about_description'>
              <h2>SOBRE NOSOTROS</h2>
              <p>CONSTRUCTORA HERMANOS S.A.C a lo largo de los años ha adquirido el conocimiento y la experiencia necesaria para ofrecer a los clientes un servicio de calidad, y desempeñar las labores encomendadas, relacionadas con la ejecución de proyectos inmobiliarios en Huancayo y la elaboración de expedientes técnicos.</p>
            </div>
            <div className='about_description'>
              <h2>LO QUE HACEMOS</h2>
              <p>Somos una empresa constructora en Huancayo especializada en prestar servicios integrales para la ejecución de proyectos inmobiliarios en Huancayo. Entre nuestros servicios se encuentran: ejecución de obras de ingeniería civil, demoliciones, alquiler de maquinaria pesada, o la elaboración y ejecución de proyectos de construcción.</p>
            </div>
            <div className='about_description'>
              <h2>NUESTRA RESPONSABILIDAD</h2>
              <p>CONSTRUCTORA HERMANOS S.A.C es mucho más que una simple empresa constructora. Desde el principio, contribuimos y nos implicamos con el desarrollo social del Perú, así como respetamos tanto la normativa referente a los temas de seguridad ocupacional como el medio ambiente.</p>
            </div>
          </div>
        </div>
        <div className='about_banner_2'>
          <div className='container'>
            <div className='banner_2_contain'></div>
            <div className='banner_2_contain'>
              <h2>SOLUCIONES INTEGRALES EN PROYECTOS INMOBILIARIOS EN HUANCAYO</h2>
              <p>Misión: coordinar, supervisar y ejecutar proyectos de construcción que satisfagan por completo las necesidades de los clientes, con mano de obra experta y cualificada, y las herramientas óptimas para ofrecer un resultado de calidad, con respeto y cuidado del medio ambiente.</p>
              <p>Visión: ser la empresa constructora líder en la región centro del Perú contribuyendo de manera activa al crecimiento de la región, y ofreciendo como resultado obras reconocidas por su calidad y belleza.</p>
              <a
                href='/img/servicios.pdf'
                download='servicios'
              >
                <span className='custom_btn'>DESCARGAR BROCHURE</span>
              </a>
            </div>
          </div>
        </div>
        <div className='about_banner_2 sec_2'>
          <div className='container'>
            <div className='banner_2_contain'>
              <h2>NUESTROS VALORES</h2>
              <ul>
                <li>Respeto por las personas y los derechos sociales.</li>
                <li>Responsabilidad y formalidad con los compromisos adquiridos.</li>
                <li>Comprometidos con la calidad, seguridad y el cuidado del medio ambiente.</li>
                <li>Profesionalismo.</li>
              </ul>
              <a
                href='/img/servicios.pdf'
                download='servicios'
              >
                <span className='custom_btn'>DESCARGAR BROCHURE</span>
              </a>
            </div>
            <div className='banner_2_contain'></div>
          </div>
        </div>
        <ButtonUp />

      </div>
      <Footer />
    </>
  )
}
