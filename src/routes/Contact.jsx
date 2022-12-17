import Banner from '../components/Banner'
import banner from '../data/contact/banner.json'
import Menu from '../components/Menu'
import FormInput from '../components/FormInput'
import inputs from '../data/contact/inputs.json'
import Footer from '../components/Footer'
import { useState } from 'react'
export default function Contact() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    asunt: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Menu />
      <div className='contact_container'>
        <Banner {...banner} />
        <div className='container'>
          <div className='contact_options'>
            <div className='option_img active'>
              <img src='img/category1.jpg' />
              <p>CONTACTAR</p>
            </div>
            <div className='option_img'>
              <img src='img/category1.jpg' />
              <p>COTIZA TU CONTRUCCIÓN</p>
            </div>
            <div className='option_img'>
              <img src='img/category1.jpg' />
              <p>ALQUILER DE MAQUINARIA</p>
            </div>
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
                  <button
                    className='custom_btn'
                    type='submit'
                    value='ENVIAR'
                    id='btnSubmit'
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
