import { useState } from 'react'

export default function useForm(initial = {}) {
  const [inputs2, setInputs] = useState(initial)

  function handleChange(e) {
    let { name, type, value } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return {
    inputs2,
    handleChange,
  }
}
