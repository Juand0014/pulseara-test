import { IProcedure } from "../../models/procedures";
import "./Card.style.scss";

export const CardProcedure = ({
    procedure,
    code,
    difference,
    authorized,
    reclaim,
}: IProcedure) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card__body">
                    <div className="card-item">
                        <h4 className="item-title">Procedimiento 01</h4>
                        <p>{procedure}</p>
                    </div>
                    <div className="card-item">
                        <h4 className="item-title">Código</h4>
                        <p>{code}</p>
                    </div>
                    <div className="card-item">
                        <h4 className="item-title">Reclamado</h4>
                        <p>{reclaim}</p>
                    </div>
                    <div className="card-item">
                        <h4 className="item-title">Diferencia RD$</h4>
                        <p>{difference}</p>
                    </div>
                    <div className="card-item">
                        <h4 className="item-title">Autorizado RD$</h4>
                        <p>{authorized}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
