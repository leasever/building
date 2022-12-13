import { useRouteError } from 'react-router-dom'
import Menu from '../components/Menu'
export default function Error() {
  const error = useRouteError()
  return (
    <div>
      <Menu />
      <h1>Error</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}
