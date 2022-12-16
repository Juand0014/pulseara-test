import { useEffect } from "react"
import { http } from "./services/services"
import "./App.scss"

function App() {

  useEffect(() => {
    (async () => {
      const data = await http.get('procedure');
      console.log(data);
    })()
  }, [])

  return (
    <div className="App">
      <h3>Procedimientos</h3>
      <div className="card-container">
        <div className="card">
          <div className="card__body">
            <div className="card-item">
              <h4 className="item-title">Procedimiento 01</h4>
              <p>
                Esclerosis
              </p>
            </div>
            <div className="card-item">
              <h4 className="item-title">Código</h4>
              <p>
                3425
              </p>
            </div>
            <div className="card-item">
              <h4 className="item-title">Reclamado</h4>
              <p>
                RD$ 500
              </p>
            </div>
            <div className="card-item">
            <h4 className="item-title">Diferencia RD$</h4>
              <p>
                RD$ 500
              </p>
            </div>
            <div className="card-item">
              <h4 className="item-title">Autorizado RD$</h4>
              <p>
                RD$ 500
              </p>
            </div>    
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card__body">
            <div className="card-item">
              <h4 className="item-title">Procedimiento 01</h4>
              <p>
                Esclerosis
              </p>
            </div>
            <div className="card-item">
              <h4 className="item-title">Código</h4>
              <p>
                3425
              </p>
            </div>
            <div className="card-item">
              <h4 className="item-title">Reclamado</h4>
              <p>
                RD$ 500
              </p>
            </div>
            <div className="card-item">
            <h4 className="item-title">Diferencia RD$</h4>
              <p>
                RD$ 500
              </p>
            </div>
            <div className="card-item">
              <h4 className="item-title">Autorizado RD$</h4>
              <p>
                RD$ 500
              </p>
            </div>    
          </div>
        </div>
      </div>

      <button className="button">
        Editar Procedimientos
      </button>
    </div>
  )
}

export default App