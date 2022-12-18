import { useState } from 'react'

export default function FormInput(props) {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = () => {
    setFocused(true)
  }
  return (
    <>
      <label>
        {label}
        {id === 6 ? (
          <textarea
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
        ) : (
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
          />
        )}
        <p>{errorMessage}</p>
      </label>
    </>
  )
}
