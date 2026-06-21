
import {Welcome} from './welcome'

export function InteractiveWelcome() {
    const [name, setName] = React.useState('')
  return (
    <div>
      <Welcome name={name} />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
  )


}