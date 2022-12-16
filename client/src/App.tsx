import { useEffect } from "react"
import { http } from "./services/services"

function App() {

  useEffect(() => {
    (async () => {
      const data = await http.get('procedure');
      console.log(data);
    })()
  }, [])

  return (
    <div className="App">
      <h1>Hola Bro</h1>
    </div>
  )
}

export default App