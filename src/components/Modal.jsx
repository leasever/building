import Carousel from './Carousel'
export default function Modal({ open, onClose }) {
  if (!open) return null
  return (
    <div onClick={onClose} className="overlay_modal">
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className="modal_container"
      >
        <div className="carousel_img">
          <Carousel />
        </div>

        <div className="modal_right">
          <div className="close icon close_btn_modal" onClick={onClose}></div>
          <div className="content_modal">
            <p>REMODELACIÓN DE PRIMER PISO DE EDIFICIO DE GOBIERNO</p>
            <ul>
              <li>
                <strong>Lugar:</strong> Huancayo
              </li>
              <li>
                <strong>Cliente:</strong> Universidad de la vida UV
              </li>
              <li>
                <strong>Año de entrega:</strong> 2020
              </li>
            </ul>
            <p>Aquí va puesta la descripción de la promoción si fuera necesario.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
