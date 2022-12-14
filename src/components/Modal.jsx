import Carousel from './Carousel'
import projects from '../data/project/projects.json'
export default function Modal({ open, onClose, projectId }) {
  if (!open) return null
  const project = projects.find((item) => item.id === projectId)
  const { images, title, city, customer, year, description } = project
  return (
    <>
      <div onClick={onClose} className="overlay_modal">
        <div className="close_btn_modal">
          <span className="close icon " onClick={onClose}></span>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="modal_container"
        >
          <div className="carousel_img">
            <Carousel imageList={images} />
          </div>

          <div className="modal_right">
            <div className="content_modal">
              <p>{title}</p>
              <ul>
                <li>
                  <strong>Lugar:</strong> {city}
                </li>
                <li>
                  <strong>Cliente:</strong> {customer}
                </li>
                <li>
                  <strong>Año de entrega:</strong> {year}
                </li>
              </ul>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
