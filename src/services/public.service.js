export const postEmail = async (props) => {
  const dataSend = await fetch(`${import.meta.env.VITE_EMAIL_URL}${import.meta.env.VITE_EMAIL_TOKEN}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(props),
  })
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
  return dataSend
}
