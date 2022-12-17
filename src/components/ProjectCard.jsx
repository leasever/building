import { useState } from 'react'
import Modal from './Modal'
import projects from '../data/project/projects.json'

export default function ProjectCard() {
  const [openModal, setOpenModal] = useState(false)
  const [idProject, setIdProject] = useState('')
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        projectId={idProject}
      />
      {projects.map((item) => (
        <div
          onClick={() => {
            setOpenModal(true), setIdProject(item.id)
          }}
          className='card_project'
          key={item.id}
        >
          <div className='card_img_project'>
            <img
              src={item.imgPortada}
              loading='lazy'
              alt='project urban'
            />
          </div>
          <div className='project_description'>
            <p>{item.title}</p>
            <p>{item.city}</p>
          </div>
        </div>
      ))}
    </>
  )
}
