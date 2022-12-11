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
        <img src="img/project_modal_1.jpg" loading="lazy" alt="project urban" />
        <div className="modal_right">
          <p onClick={onClose} className="close_btn_modal">
            X
          </p>
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
