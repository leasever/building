import { useState } from 'react'

export default function ButtonWhatsaap() {
  const [isClicked, setIsClicked] = useState(false)
  const [message, setMessage] = useState('')
  const btnWhatshap = () => {
    setIsClicked(!isClicked)
  }
  const handleSubmit = (e) => {
    if (!message) {
      e.preventDefault()      
    } else {
      let WhatsAppUrl = 'https://web.whatsapp.com/send'
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        WhatsAppUrl = 'https://api.whatsapp.com/send'
      }
      let url = WhatsAppUrl + '?phone=' + `${import.meta.env.VITE_NUMBER_PHONE}` + '&text=' + message
      let win = window.open(url, '_blank')
      win.focus()
    }
  }
  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <>
      <div className={`whatsapp_chat_support wcs_fixed_right wcs-effect-1 ${!isClicked ? ' ' : ' wcs-show'}`}>
        <div
          onClick={btnWhatshap}
          className={`wcs_button_label ${!isClicked ? ' ' : 'wcs_button_label_hide'}`}
        >
          Contáctanos
        </div>

        <div
          className='wcs_button_circle'
          onClick={btnWhatshap}
        >
          <div className='fa'></div>
        </div>

        <div className='wcs_popup'>
          <div
            className='wcs_popup_close'
            onClick={btnWhatshap}
          >
            <div className='close icon'></div>
          </div>
          <div className='wcs_popup_header'>
            <div className='fa'></div>
            <strong>Servicio al cliente</strong>

            <div className='wcs_popup_header_description'>¿Necesidad de ayuda? Chatea con nosotros en Whatsapp</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              className='wcs_popup_input'
              data-number='528123861273'
              data-availability='{ "monday":"07:00-22:30", "tuesday":"07:00-22:30", "wednesday":"07:7030-22:30", "thursday":"07:00-22:30", "friday":"07:00-22:30", "saturday":"09:00-18:30", "sunday":"09:00-22:30" }'
            >
              <input
                type='text'
                placeholder='Escribir pregunta'
                onChange={handleChange}
              />
              <button className='fa_play'>
                <div className='gg_play_button'></div>
              </button>
            </div>
          </form>
          <div className='wcs_popup_avatar wcs_popup_input_offline '>
            <img
              src='img/user_whatsapp.jpg'
              alt='Asistente whatsapp'
            />
          </div>
        </div>
      </div>
    </>
  )
}
