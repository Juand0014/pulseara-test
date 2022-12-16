import './Card.style.scss';

export const CardProcedure = ({
	
}) => {
	return (
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
	)
}