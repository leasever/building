import Banner from '../components/Banner'
import banner from '../data/contact/banner.json'
import Menu from '../components/Menu'
import FormInput from '../components/FormInput'
import inputs from '../data/contact/inputs.json'
import Footer from '../components/Footer'
import { useState } from 'react'
import ButtonWhatsaap from '../components/ButtonWhatsapp'
import { postEmail } from '../services/public.service'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sendEmail, setSendEmail] = useState(false)
  const [success, setSuccess] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [startX, setStartX] = useState(0)

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    asunt: '',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { success } = await postEmail(values)
    setLoading(false), setSendEmail(true)
    success === 'false' ? setSuccess(false) : setSuccess(true)
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleMouseDown = (e) => {
    setPressed(true)
    setStartX(e.clientX)
    e.target.parentNode.style.cursor = 'grabbing'
    windowMouseUp(e)
  }
  const handleMouseLeave = (e) => {
    setPressed(false)
    windowMouseUp(e)
  }

  const handleMouseMove = (e) => {
    if (!pressed) return
    e.target.parentNode.scrollLeft += startX - e.clientX
    windowMouseUp(e)
  }

  const windowMouseUp = (e) => {
    window.addEventListener('mouseup', () => {
      setPressed(false)
      e.target.parentNode.style.cursor = 'grab'
    })
  }

  return (
    <div>
      <Menu />
      <div className='contact_container'>
        <Banner {...banner} />
        <ButtonWhatsaap />

        <div className='contact_options'>
          <div
            className='co_ow'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          ></div>
          <div className='option_img '>
            <div
              className='img_contact '
              style={{
                backgroundImage: `url('img/category1.jpg')`,
              }}
            ></div>
            <p>CONTACTAR</p>
          </div>
          <div className='option_img '>
            <div
              className='img_contact '
              style={{
                backgroundImage: `url('img/category1.jpg')`,
              }}
            ></div>
            <p>COTIZA TU CONTRUCCIÓN</p>
          </div>
          <div className='option_img '>
            <div
              className='img_contact '
              style={{
                backgroundImage: `url('img/category1.jpg')`,
              }}
            ></div>
            <p>ALQUILER DE MAQUINARIA</p>
          </div>
          <div className='option_img '>
            <div
              className='img_contact '
              style={{
                backgroundImage: `url('img/category1.jpg')`,
              }}
            ></div>
            <p>OTROS</p>
          </div>
        </div>

        <div className='contact_info_form'>
          <div className='container'>
            <div className='contact_info'>
              <p>Para cualquier contacto o comunicación con la empresa, pueden utilizar los siguientes medios:</p>
              <p>
                <strong>MAIL: </strong> leandrovegaabraham@gmail.com <br />
                <strong>TELÉFONO: </strong> 966 908 047
              </p>
              <p>
                <strong>DIRECCIÓN:</strong>
                <br />
                Huancayo - Junin (Perú).
              </p>
            </div>

            <div className='contact_form'>
              {!sendEmail ? (
                <form onSubmit={handleSubmit}>
                  {inputs.map((item) => (
                    <div
                      key={item.id}
                      className={`input_group i_g_${item.id}`}
                    >
                      <FormInput
                        {...item}
                        value={values[item.name]}
                        onChange={onChange}
                      />
                    </div>
                  ))}

                  <div className='input_group'>
                    {loading ? (
                      <div className='section_spinner'>
                        <div className='spinner'></div>
                      </div>
                    ) : (
                      <button className='custom_btn'>ENVIAR</button>
                    )}
                  </div>
                </form>
              ) : (
                <div className='send_email_true'>
                  <div
                    className='success_send'
                    style={{
                      backgroundImage: `url('/img/${!success ? 'error_failure.svg' : 'check_symbol.svg'}')`,
                    }}
                  ></div>
                  <p>{!success ? '¡No se pudo enviar el email!' : `Email enviado exitosamente, pronto nos contactaremos con ud. ${values.firstName + ' ' + values.lastName + ' al email ' + values.email}`}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
