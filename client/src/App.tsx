import { useEffect, useState } from "react"
import { http } from "./services/services"
import "./App.scss"
import { IProcedure } from "./models/procedures"
import { AxiosResponse } from "axios"
import { useQuery } from "react-query"

function App() {

  const onSuccess = () => console.log("success");
	const onError = () => console.log("error");

  const { data, error, isLoading } = useQuery<any, Error>("procedure", ()=> http.get('procedure'), {
    onSuccess,
		onError,
  })
  
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